import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ $bgColor?: string; $disabled?: boolean }>`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${({ $bgColor }) => $bgColor ?? '#e5e7eb'};

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Label: React.FC<LabelProps> = ({ text, bgColor, disabled }) => {
  return (
    <StyledLabel
      $bgColor={disabled ? '#f3f4f6' : bgColor}
      $disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
};
