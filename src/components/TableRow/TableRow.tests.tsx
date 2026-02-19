import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

test('renders table row', () => {
  render(<table><tbody><TableRow><td>Row</td></TableRow></tbody></table>);
  expect(screen.getByText(/row/i)).toBeVisible();
});
