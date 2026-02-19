import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button', () => {
    render(<RadioButton label="Test Radio" />);
    expect(screen.getByLabelText(/test radio/i)).toBeVisible();
  });

  test('disabled state works', () => {
    render(<RadioButton label="Disabled Radio" disabled />);
    expect(screen.getByLabelText(/disabled radio/i)).toBeDisabled();
  });
});
