import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

test('renders table footer', () => {
  render(<table><TableFooter><tr><td>Foot</td></tr></TableFooter></table>);
  expect(screen.getByText(/foot/i)).toBeVisible();
});
