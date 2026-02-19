import React from 'react';
import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $width?: string; $disabled?: boolean }>`
  width: ${({ $width }) => $width ?? '100%'};
  max-width: 480px;
  height: auto;
  border-radius: 12px;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 768px) {
    max-width: 520px;
  }
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, disabled }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      $width={width}
      $disabled={disabled}
    />
  );
};
