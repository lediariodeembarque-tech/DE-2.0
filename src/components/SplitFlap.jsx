import React, { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

export function SplitFlap({ text = '', className = '' }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    setDisplay(text);
  }, [text]);

  return (
    <div className={`font-display font-bold tracking-widest text-amber-400 ${className}`}>
      {display}
    </div>
  );
}

export default SplitFlap;
