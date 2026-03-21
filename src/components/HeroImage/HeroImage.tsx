import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.div<{ $disabled?: boolean }>`
  width: 100%;
  max-width: 720px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.25rem 0 0 0;
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  heading,
  subheading,
  disabled,
}) => {
  return (
    <Wrapper $disabled={disabled}>
      <Image src={src} alt={heading} />
      <TextOverlay>
        <h2>{heading}</h2>
        {subheading && <p>{subheading}</p>}
      </TextOverlay>
    </Wrapper>
  );
};
