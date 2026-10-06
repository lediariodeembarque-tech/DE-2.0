import React from 'react';

export function CampoCodigo({ value = '', onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder="Digite o código de atraso"
      className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none"
    />
  );
}

export default CampoCodigo;
