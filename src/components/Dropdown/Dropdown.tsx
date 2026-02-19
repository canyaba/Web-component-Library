import React from 'react';
import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ $bgColor?: string; $disabled?: boolean }>`
  width: 100%;
  max-width: 320px;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 1rem;

  background: ${({ $bgColor }) => $bgColor ?? '#ffffff'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  bgColor,
  disabled,
  onChange,
}) => {
  return (
    <StyledSelect
      value={value}
      disabled={disabled}
      $bgColor={disabled ? '#f3f4f6' : bgColor}
      $disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};
