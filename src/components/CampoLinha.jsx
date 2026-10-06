import React from 'react';

export function CampoLinha({ label, value = '', onChange, readonly, readOnly, multiline = false, mono = false, type = 'text' }) {
  const common = {
    value,
    onChange: (e) => onChange?.(e.target.value),
    readOnly: readOnly ?? readonly,
    className: `w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ${mono ? 'font-mono' : ''}`,
  };

  return (
    <label className="block text-xs text-slate-400">
      <span className="mb-1 block font-semibold uppercase tracking-wide text-amber-400">{label}</span>
      {multiline ? (
        <textarea {...common} rows={3} />
      ) : (
        <input {...common} type={type} />
      )}
    </label>
  );
}

export default CampoLinha;
