import React from 'react';

export function TicketButton({ children, onClick, icon: Icon, className = '', tone = 'amber', disabled = false, ...props }) {
  const toneClass = tone === 'dark' ? 'bg-slate-800 text-slate-100' : 'bg-amber-400 text-slate-900';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition ${toneClass} hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}

export default TicketButton;
