import React from 'react';
import { Plane } from 'lucide-react';
import { StatusLuz } from './StatusLuz.jsx';

export function estadoVoo(voo = {}) {
  if (!voo || !voo.voo) return 'nao_iniciado';
  if (voo.terminoEmbarque || voo.total) return 'concluido';
  if (voo.inicioEmbarque || voo.saida || voo.horario) return 'em_andamento';
  return 'nao_iniciado';
}

export function CartaoVoo({ voo = {}, indice = 0, dia, usuario, onChange, onRemover, readOnly, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const st = estadoVoo(voo);

  return (
    <div className="painel rounded-2xl p-3">
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-3">
          <StatusLuz estado={st} />
          <div>
            <div className="font-display text-sm font-bold tracking-wide text-slate-100">Voo {voo.voo || `#${indice + 1}`}</div>
            <div className="text-[11px] text-slate-400">{voo.destino || 'Destino não informado'} · {voo.horario || 'Horário —'}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Plane size={14} />
          <span className="text-xs">{st}</span>
        </div>
      </button>

      {open && (
        <div className="mt-3 space-y-3 border-t border-white/10 pt-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <input value={voo.voo || ''} onChange={(e) => onChange?.({ ...voo, voo: e.target.value })} disabled={readOnly} className="rounded-lg border border-white/10 bg-slate-950/50 px-2 py-2 text-slate-100" placeholder="Voo" />
            <input value={voo.destino || ''} onChange={(e) => onChange?.({ ...voo, destino: e.target.value })} disabled={readOnly} className="rounded-lg border border-white/10 bg-slate-950/50 px-2 py-2 text-slate-100" placeholder="Destino" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <input value={voo.horario || ''} onChange={(e) => onChange?.({ ...voo, horario: e.target.value })} disabled={readOnly} className="rounded-lg border border-white/10 bg-slate-950/50 px-2 py-2 text-slate-100" placeholder="Horário" />
            <input value={voo.porta || ''} onChange={(e) => onChange?.({ ...voo, porta: e.target.value })} disabled={readOnly} className="rounded-lg border border-white/10 bg-slate-950/50 px-2 py-2 text-slate-100" placeholder="Porta" />
          </div>
          <textarea value={voo.observacoes || ''} onChange={(e) => onChange?.({ ...voo, observacoes: e.target.value })} disabled={readOnly} rows={3} className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-2 py-2 text-sm text-slate-100" placeholder="Observações" />
          {!readOnly && (
            <button type="button" onClick={onRemover} className="text-xs font-semibold text-red-400">Excluir voo</button>
          )}
        </div>
      )}
    </div>
  );
}

export default CartaoVoo;
