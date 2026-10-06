import React from 'react';

export default function AuthLayout({
  icon: Icon,
  title,
  subtitle,
  background,
  footer,
  children,
  amarelo = false,
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: background ? `url(${background})` : 'none' }}
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl backdrop-blur-md">
          <div className="mb-6 flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${amarelo ? 'bg-amber-400 text-slate-900' : 'bg-slate-700 text-white'}`}>
              {Icon ? <Icon className="h-5 w-5" /> : null}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-amber-400">{title}</h1>
              {subtitle ? <p className="text-sm text-slate-300">{subtitle}</p> : null}
            </div>
          </div>
          {children}
          {footer ? <p className="mt-5 text-center text-sm text-slate-300">{footer}</p> : null}
        </div>
      </div>
    </div>
  );
}
