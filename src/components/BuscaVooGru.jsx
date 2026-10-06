import React from 'react';

export function BuscaVooGru({ onUsarDados }) {
  return (
    <div className="mt-4 rounded-xl border border-dashed border-white/10 p-3 text-sm text-slate-300">
      <div className="mb-2 font-display text-xs uppercase tracking-widest text-amber-400">Busca GRU</div>
      <button
        type="button"
        className="rounded-lg bg-amber-400 px-3 py-2 text-xs font-semibold text-slate-900"
        onClick={() => onUsarDados?.({ voo: '123', destino: 'GRU', horario: '08:30' })}
      >
        Usar dados de exemplo
      </button>
    </div>
  );
}

export default BuscaVooGru;
