import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $bgColor?: string; $disabled?: boolean }>`
  width: 100%;
  max-width: 320px;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  background: ${({ $bgColor }) => $bgColor ?? '#2563eb'};
  color: white;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  bgColor,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      $bgColor={disabled ? '#9ca3af' : bgColor}
      $disabled={disabled}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
