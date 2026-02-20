import React from 'react';
import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const Cell = styled('td')`
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <Cell>{children}</Cell>;
};

