import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio sections and footer actions', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /chibuike anyaba/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /identity, standards, and the way i approach product work/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /curated technical range, not a scattered tool list/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /selected work with more atmosphere, structure, and visual restraint/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /a clear path to the work, profile, and supporting resources/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /chibuikeanyaba@gmail.com/i })
  ).toHaveAttribute('href', 'mailto:chibuikeanyaba@gmail.com');
  expect(
    screen.getByRole('button', { name: /back to top/i })
  ).toBeInTheDocument();
});
