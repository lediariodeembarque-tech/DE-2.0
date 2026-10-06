import React from 'react';

const Dialog = ({ open, onOpenChange, children }) => {
  return open ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">{children}</div> : null;
};

export { Dialog };
