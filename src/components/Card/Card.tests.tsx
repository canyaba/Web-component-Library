import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders card and is visible', () => {
    render(<Card title="Test Card">Content</Card>);
    const card = screen.getByRole('region', { name: /test card/i });
    expect(card).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    render(
      <Card title="Disabled Card" disabled>
        Content
      </Card>
    );

    const card = screen.getByRole('region', { name: /disabled card/i });

    expect(card).toHaveStyle('cursor: not-allowed');
  });
});
