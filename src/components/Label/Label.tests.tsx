import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders label', () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText(/test label/i)).toBeVisible();
  });

  test('disabled state applies cursor rule', () => {
    render(<Label text="Disabled" disabled />);
    expect(screen.getByText(/disabled/i)).toHaveStyle('cursor: not-allowed');
  });
});
