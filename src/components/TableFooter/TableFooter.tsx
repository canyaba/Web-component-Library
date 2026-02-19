import React from 'react';

export const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};
