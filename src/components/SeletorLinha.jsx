import React from 'react';
import { cn } from '@/lib/utils';

export function SeletorLinha({ label, value = '', onChange, options = [], readOnly = false }) {
  return (
    <div>
      <label className="text-xs font-bold tracking-widest text-amber-400 uppercase">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={readOnly}
        className={cn(
          'w-full mt-1 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none',
          'focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 disabled:opacity-50'
        )}
      >
        <option value="">Selecione...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SeletorLinha;
