import React from 'react';
import { Plane } from 'lucide-react';

export default function TicketButton({ children, onClick, icon: Icon = Plane, className = '', ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 ${className}`}
      {...props}
    >
      {Icon ? <Icon size={16} /> : null}
      {children}
    </button>
  );
}
