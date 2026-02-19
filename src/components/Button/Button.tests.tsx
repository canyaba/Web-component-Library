import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button and is visible', () => {
    render(<Button label="Test Button" />);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const button = screen.getByRole('button', { name: /disabled button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveStyle('cursor: not-allowed');
  });
});
