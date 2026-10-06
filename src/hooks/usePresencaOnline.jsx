import React, { useEffect, useState } from 'react';

export function usePresencaOnline(userId) {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    // placeholder: simula presença online
    setOnline(Math.random() > 0.7);
  }, [userId]);

  return online;
}

export default usePresencaOnline;
