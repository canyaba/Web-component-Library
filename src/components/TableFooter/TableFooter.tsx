import React from 'react';
import type { TableFooterProps } from './TableFooter.types';

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};
