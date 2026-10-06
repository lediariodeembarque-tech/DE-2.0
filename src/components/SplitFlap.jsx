import React from 'react';

export const SplitFlap = ({ text = '', className = '' }) => {
  const chars = [...(text || '')];
  return (
    <div className={`flap-row ${className}`.trim()}>
      {chars.map((char, index) => (
        <span key={`${char}-${index}`} className={`flap-cell ${char === ' ' ? 'space' : ''}`}>
          {char === ' ' ? '·' : char}
        </span>
      ))}
    </div>
  );
};

export default SplitFlap;
