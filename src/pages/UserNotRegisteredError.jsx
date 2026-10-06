import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserNotRegisteredError() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <p className="mb-4 text-lg font-semibold">Acesso restrito</p>
        <p className="mb-6 text-sm text-muted-foreground">Você não está registrado para acessar este app.</p>
        <button onClick={() => navigate('/')} className="rounded-lg bg-amber-400 px-4 py-2 font-bold text-slate-900">Voltar à home</button>
      </div>
    </div>
  );
}
