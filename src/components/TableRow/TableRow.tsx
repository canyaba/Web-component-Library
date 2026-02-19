import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};
