import React from 'react';
import { X } from 'lucide-react';

export default function AuthLayout({ icon: Icon, title, subtitle, children, footer, background }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {Icon && (
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10">
                <Icon size={32} className="text-amber-400" />
              </div>
            </div>
          )}
          {title && <h1 className="text-center text-2xl font-bold text-amber-400 mb-2">{title}</h1>}
          {subtitle && <p className="text-center text-sm text-slate-400 mb-8">{subtitle}</p>}
          <div className="space-y-4">{children}</div>
        </div>
      </div>
      {footer && <footer className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">{footer}</footer>}
    </div>
  );
}
