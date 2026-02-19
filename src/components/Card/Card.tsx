import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const Wrapper = styled.div<{ $bgColor?: string; $disabled?: boolean }>`
  width: 100%;
  max-width: 520px;
  border-radius: 14px;
  padding: 1rem;
  border: 1px solid #e5e7eb;

  background: ${({ $bgColor }) => $bgColor ?? '#ffffff'};
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Card: React.FC<CardProps> = ({
  title,
  children,
  bgColor,
  disabled,
}) => {
  return (
    <Wrapper
      role="region"
      aria-label={title}
      $bgColor={disabled ? '#f3f4f6' : bgColor}
      $disabled={disabled}
    >
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
};
