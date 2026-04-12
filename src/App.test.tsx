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
      name: /professional summary and working style/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /technical strengths and workflow tools/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /selected work with clearer visual rhythm/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /relevant links and next-step contact points/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /back to top/i })
  ).toBeInTheDocument();
});
