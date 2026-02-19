import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <Wrapper $disabled={disabled}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      {label}
    </Wrapper>
  );
};
