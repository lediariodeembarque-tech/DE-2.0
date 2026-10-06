import React from 'react';

export function Divider({ className = '' }) {
  return <hr className={`border-t border-white/10 ${className}`} />;
}

export default Divider;
