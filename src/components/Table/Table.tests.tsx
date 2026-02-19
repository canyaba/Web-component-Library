import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders table', () => {
  render(<Table><tbody><tr><td>Cell</td></tr></tbody></Table>);
  expect(screen.getByText(/cell/i)).toBeVisible();
});
