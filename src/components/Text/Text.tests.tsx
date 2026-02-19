import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders text visibly', () => {
    render(<Text text="Hello World" />);
    expect(screen.getByText(/hello world/i)).toBeVisible();
  });

  test('disabled state changes cursor', () => {
    render(<Text text="Disabled" disabled />);
    expect(screen.getByText(/disabled/i)).toHaveStyle('cursor: not-allowed');
  });
});
