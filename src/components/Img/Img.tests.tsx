import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders image', () => {
    render(<Img src="test.jpg" alt="Test Image" />);
    expect(screen.getByAltText(/test image/i)).toBeVisible();
  });

  test('disabled state changes cursor', () => {
    render(<Img src="test.jpg" alt="Disabled Image" disabled />);
    expect(screen.getByAltText(/disabled image/i)).toHaveStyle(
      'cursor: not-allowed'
    );
  });
});
