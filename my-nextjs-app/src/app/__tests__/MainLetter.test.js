import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLetter from '../components/MainLetter';

test('MainLetter displays the current letter', () => {
  render(<MainLetter letter="A" />);
  expect(screen.getByText(/A/i)).toBeInTheDocument();
});

test('MainLetter displays placeholder when no letter is provided', () => {
  render(<MainLetter letter="" />);
  expect(screen.getByText(/-/i)).toBeInTheDocument();
});