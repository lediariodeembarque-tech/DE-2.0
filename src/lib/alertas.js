const timers = new Map();
export const ANTECIPACAO_MIN = 15;

export function notificacoesSuportadas() {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export async function pedirPermissaoNotificacao() {
  if (!notificacoesSuportadas()) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  try {
    return (await Notification.requestPermission()) === 'granted';
  } catch {
    return false;
  }
}

function montarMensagem(voo) {
  const numero = voo.voo || '??';
  const destino = voo.destino || '—';
  return {
    title: `Embarque do voo ${numero} para ${destino} às ${voo.horario}`,
    body: 'O embarque se aproxima — prepare o portão.',
  };
}

export async function agendarAlerta(voo) {
  if (!voo || !voo.id) return;
  cancelarAlerta(voo.id);
  if (!voo.horario) return;
  const [h, m] = String(voo.horario).split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return;

  const alvo = new Date();
  alvo.setHours(h, m, 0, 0);
  alvo.setMinutes(alvo.getMinutes() - ANTECIPACAO_MIN);
  const delay = alvo.getTime() - Date.now();
  if (delay <= 0 || delay > 1000 * 60 * 60 * 24) return;

  const ok = await pedirPermissaoNotificacao();
  if (!ok) return;

  const id = voo.id;
  const t = setTimeout(() => {
    timers.delete(id);
    try {
      const { title, body } = montarMensagem(voo);
      new Notification(title, { body, tag: `voo-${id}` });
    } catch {}
  }, delay);
  timers.set(id, t);
}

export function cancelarAlerta(vooId) {
  if (!vooId) return;
  const t = timers.get(vooId);
  if (t) {
    clearTimeout(t);
    timers.delete(vooId);
  }
}

export function cancelarTodos() {
  timers.forEach((t) => clearTimeout(t));
  timers.clear();
}
