import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
];

describe('Dropdown Component', () => {
  test('renders dropdown', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByRole('combobox')).toBeVisible();
  });

  test('disabled state applied', () => {
    render(<Dropdown options={options} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
