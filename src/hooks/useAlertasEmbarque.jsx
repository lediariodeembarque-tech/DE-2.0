import { useEffect, useRef } from 'react';
import { agendarAlerta, cancelarAlerta } from '@/lib/alertas';

export function useAlertasEmbarque(dia) {
  const prevIds = useRef(new Set());

  useEffect(() => {
    const voos = dia?.voos || [];
    const curIds = new Set(voos.map((v) => v.id));

    voos.forEach((v) => {
      if (v.horario) agendarAlerta(v);
      else cancelarAlerta(v.id);
    });

    prevIds.current.forEach((id) => {
      if (!curIds.has(id)) cancelarAlerta(id);
    });

    prevIds.current = curIds;
  }, [dia?.voos]);
}

export default useAlertasEmbarque;
