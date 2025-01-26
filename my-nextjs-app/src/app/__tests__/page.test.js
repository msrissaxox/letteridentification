import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from '../page';

describe('Page Component', () => {
  test('renders all main components and handles game flow', async () => {
    render(<Page />);

    // Verify score elements exist
    const scoreElements = screen.getAllByText(/Score:/i);
    expect(scoreElements.length).toBeGreaterThan(0);

    const highScoreElements = screen.getAllByText(/High Score:/i);
    expect(highScoreElements.length).toBeGreaterThan(0);

    // Simulate clicking the "New Letter" button
    const newLetterButton = screen.getByRole('button', { name: /new letter/i });
    fireEvent.click(newLetterButton);


    // Verify options are rendered
    const options = screen.getAllByRole('button', { name: /^[A-Z]$/ }); // Match all letter buttons
    expect(options.length).toBe(4); // Ensure 4 options are rendered


  });
});
