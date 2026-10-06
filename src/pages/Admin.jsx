import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane } from 'lucide-react';

const db = globalThis.__B44_DB__ || {
  auth: { me: async () => null },
  entities: new Proxy({}, { get: () => ({ filter: async () => [], list: async () => [], subscribe: () => () => {} }) }),
};

export default function Admin() {
  const navigate = useNavigate();
  const [ehAdmin, setEhAdmin] = useState(null);

  useEffect(() => {
    db.auth.me?.().then((u) => setEhAdmin(u?.role === 'admin')).catch(() => setEhAdmin(false));
  }, []);

  if (ehAdmin === false) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="mb-4">Acesso restrito a administradores.</p>
          <button onClick={() => navigate('/diario')} className="rounded-lg bg-amber-400 px-4 py-2 font-bold text-slate-900">Voltar ao diário</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-secondary/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
            <Plane size={20} />
          </div>
          <div className="flex-1">
            <h1 className="font-display text-lg font-bold tracking-widest text-amber-400">PAINEL ADMIN</h1>
            <p className="text-xs text-slate-400">Acompanhamento em tempo real</p>
          </div>
          <button onClick={() => navigate('/diario')} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300">Meu diário</button>
        </div>
      </header>
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-5 pb-20">
        <div className="text-center text-muted-foreground">Painel administrativo carregando...</div>
      </main>
    </div>
  );
}
