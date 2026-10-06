import React from 'react';

export function SugestaoGru({ voo = '', onAceitar }) {
  if (!voo) return null;
  return (
    <button
      type="button"
      className="mt-2 text-xs text-amber-300 underline"
      onClick={() => onAceitar?.({ horario: '08:30', destino: 'GRU' })}
    >
      Sugestão GRU para {voo}
    </button>
  );
}

export default SugestaoGru;
