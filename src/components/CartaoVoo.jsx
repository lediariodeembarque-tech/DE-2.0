import React, { useState } from 'react';
import { ChevronDown, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CartaoVoo({ voo, indice, dia, usuario, onChange, onRemover, readOnly = false, defaultOpen = false }) {
  const [aberto, setAberto] = useState(defaultOpen);

  const updateVoo = (campo, valor) => {
    onChange?.({ ...voo, [campo]: valor });
  };

  return (
    <div className="painel rounded-xl">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className="flex w-full items-center gap-3 p-3 text-left"
      >
        <div className="flex-1">
          <div className="font-display font-bold tracking-wide text-slate-100 font-mono">
            {voo.voo || `Voo ${indice + 1}`} {voo.destino && `→ ${voo.destino}`}
          </div>
          <div className="text-xs text-slate-400">
            {voo.horario || '—'} · {usuario || '—'}
          </div>
        </div>
        <ChevronDown size={18} className={cn('text-slate-400 transition', aberto && 'rotate-180')} />
      </button>

      {aberto && (
        <div className="border-t border-white/10 p-3 space-y-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <input
              type="text"
              value={voo.voo || ''}
              onChange={(e) => updateVoo('voo', e.target.value)}
              placeholder="Voo"
              disabled={readOnly}
              className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1.5 text-xs outline-none"
            />
            <input
              type="text"
              value={voo.destino || ''}
              onChange={(e) => updateVoo('destino', e.target.value)}
              placeholder="Destino"
              disabled={readOnly}
              className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1.5 text-xs outline-none"
            />
            <input
              type="time"
              value={voo.horario || ''}
              onChange={(e) => updateVoo('horario', e.target.value)}
              disabled={readOnly}
              className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1.5 text-xs outline-none"
            />
            {!readOnly && (
              <button
                onClick={() => onRemover?.()}
                className="rounded-lg p-2 text-red-400 hover:bg-red-400/10"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function estadoVoo(voo) {
  if (!voo) return 'nao_iniciado';
  if (voo.terminoEmbarque) return 'concluido';
  if (voo.inicioEmbarque) return 'em_andamento';
  return 'nao_iniciado';
}

export default CartaoVoo;
