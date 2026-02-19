import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

test('renders table cell', () => {
  render(<table><tbody><tr><TableCell>Cell</TableCell></tr></tbody></table>);
  expect(screen.getByText(/cell/i)).toBeVisible();
});
