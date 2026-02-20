import React from 'react';
import type { TableRowProps } from './TableRow.types';

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};
