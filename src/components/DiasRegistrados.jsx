import React from 'react';

export function DiasRegistrados({ dias = [], carregando, onSelecionar, onExcluir, readOnly = false }) {
  if (carregando) return <div className="text-sm text-slate-400">Carregando...</div>;

  if (!dias.length) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 p-6 text-center text-sm text-slate-400">
        Nenhum dia registrado ainda.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {dias.map((d) => (
        <button
          key={d.data}
          onClick={() => onSelecionar?.(d.data)}
          className="w-full text-left painel rounded-xl p-3 hover:border-amber-400/30"
        >
          <div className="font-display font-bold text-slate-100 font-mono">{d.data}</div>
          <div className="text-xs text-slate-400">{d.voos?.length || 0} voos</div>
        </button>
      ))}
    </div>
  );
}

export default DiasRegistrados;
