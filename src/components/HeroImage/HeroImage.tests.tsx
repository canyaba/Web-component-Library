import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image', () => {
    render(<HeroImage src="hero.jpg" heading="Hero Title" />);
    expect(screen.getByAltText(/hero title/i)).toBeVisible();
  });

  test('disabled state applies cursor', () => {
    render(<HeroImage src="hero.jpg" heading="Disabled Hero" disabled />);
    expect(screen.getByAltText(/disabled hero/i)).toHaveStyle(
      'cursor: not-allowed'
    );
  });
});
