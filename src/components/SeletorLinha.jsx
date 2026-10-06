import React from 'react';

export function SeletorLinha({ label, value, onChange, options = [], readOnly }) {
  return (
    <label className="block text-xs text-slate-400">
      <span className="mb-1 block font-semibold uppercase tracking-wide text-amber-400">{label}</span>
      <select
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={readOnly}
        className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none"
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

export default SeletorLinha;
