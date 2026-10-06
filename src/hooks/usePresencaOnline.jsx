import React, { useEffect, useState } from 'react';

export function usePresencaOnline() {
  const [online, setOnline] = useState(false);
  useEffect(() => {
    setOnline(true);
    return () => setOnline(false);
  }, []);
  return online;
}

export default usePresencaOnline;
