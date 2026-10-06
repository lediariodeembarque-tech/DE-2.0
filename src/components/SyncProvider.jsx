import React from 'react';

export function SyncProvider({ children }) {
  const salvarDia = async (dia, id) => {
    try {
      if (id) {
        // atualiza dia existente
        const result = await db.entities.DiaEmbarque?.update?.(id, dia);
        return result || dia;
      } else {
        // cria novo dia
        const result = await db.entities.DiaEmbarque?.create?.(dia);
        return result || { ...dia, id: Math.random().toString(36).slice(2, 10) };
      }
    } catch (e) {
      console.warn('erro ao salvar dia:', e);
      return dia;
    }
  };

  const removerPendente = (data) => {
    // placeholder para remover de pendentes
  };

  return (
    <SyncContext.Provider value={{ salvarDia, removerPendente, pendentes: [] }}>
      {children}
    </SyncContext.Provider>
  );
}

const SyncContext = React.createContext();
export const useSync = () => React.useContext(SyncContext) || { salvarDia: async () => ({}), removerPendente: () => {}, pendentes: [] };

export default SyncProvider;
