import React from 'react';
import styled from 'styled-components';
import type { TableHeaderProps } from './TableHeader.types';

const StyledHeader = styled.thead`
  background: #f9fafb;
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
