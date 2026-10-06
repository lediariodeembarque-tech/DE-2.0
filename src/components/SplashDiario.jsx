import React from 'react';

export default function SplashDiario({ onDone }) {
  React.useEffect(() => {
    const timer = setTimeout(() => onDone?.(), 500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return null; // splash desabilitado para desenvolvimento rápido
}
