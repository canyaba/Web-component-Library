import React from 'react';
import styled from 'styled-components';

const Cell = styled.td`
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

export interface TableCellProps {
  children?: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <Cell>{children}</Cell>;
};

