import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

test('renders table header', () => {
  render(
    <table>
      <TableHeader>
        <tr>
          <th>Head</th>
        </tr>
      </TableHeader>
    </table>
  );
  expect(screen.getByText(/head/i)).toBeVisible();
});
