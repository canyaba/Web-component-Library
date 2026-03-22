import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the UI garden heading and sample components', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /ui garden component library/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /primary button/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('region', { name: /samplee card/i })
  ).toBeInTheDocument();
});
