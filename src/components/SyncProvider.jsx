import React, { createContext, useContext, useMemo, useState } from 'react';

const SyncContext = createContext(null);

export function SyncProvider({ children }) {
  const [pendentes, setPendentes] = useState([]);

  const salvarDia = async (dia, id) => {
    const payload = { ...dia, id: id || `local-${Date.now()}` };
    setPendentes((prev) => {
      const next = prev.filter((p) => p.dia?.data !== dia.data);
      return [...next, { dia: payload, id: payload.id }];
    });
    return payload;
  };

  const removerPendente = (data) => {
    setPendentes((prev) => prev.filter((p) => p.dia?.data !== data));
  };

  const value = useMemo(() => ({ salvarDia, pendentes, removerPendente }), [pendentes]);

  return <SyncContext.Provider value={value}>{children}</SyncContext.Provider>;
}

export function useSync() {
  const ctx = useContext(SyncContext);
  if (!ctx) {
    return { salvarDia: async () => null, pendentes: [], removerPendente: () => {} };
  }
  return ctx;
}

export default SyncProvider;
