import React from 'react';
import { cn } from '@/lib/utils';

export function CampoLinha({ label, value = '', onChange, type = 'text', mono = false, readOnly = false, multiline = false }) {
  const className = cn(
    'w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none transition',
    mono && 'font-mono',
    'focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 disabled:opacity-50'
  );

  if (multiline) {
    return (
      <div>
        <label className="text-xs font-bold tracking-widest text-amber-400 uppercase">{label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={readOnly}
          placeholder={label}
          className={cn(className, 'mt-1 min-h-20 resize-none')}
        />
      </div>
    );
  }

  return (
    <div>
      <label className="text-xs font-bold tracking-widest text-amber-400 uppercase">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={readOnly}
        placeholder={label}
        className={cn(className, 'mt-1')}
      />
    </div>
  );
}

export default CampoLinha;
