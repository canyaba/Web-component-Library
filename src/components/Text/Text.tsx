import React from 'react';
import styled from 'styled-components';
import type { TextProps, TextSize } from './Text.types';

const sizeMap: Record<TextSize, string> = {
  small: '0.85rem',
  medium: '1rem',
  large: '1.25rem',
};

const StyledText = styled.p<{ $size: TextSize; $bgColor?: string; $disabled?: boolean }>`
  font-size: ${({ $size }) => sizeMap[$size]};
  padding: 0.25rem 0.4rem;
  border-radius: 6px;

  background: ${({ $bgColor }) => $bgColor ?? 'transparent'};

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 768px) {
    line-height: 1.5;
  }
`;

export const Text: React.FC<TextProps> = ({
  text,
  size = 'medium',
  bgColor,
  disabled,
}) => {
  return (
    <StyledText
      $size={size}
      $bgColor={disabled ? '#f3f4f6' : bgColor}
      $disabled={disabled}
    >
      {text}
    </StyledText>
  );
};
