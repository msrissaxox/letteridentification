import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Options from '../components/Options';

test('Options renders all buttons and triggers onClick', () => {
  const onClickMock = jest.fn();
  const letters = ['A', 'B', 'C', 'D'];
  render(<Options correct="A" four={letters} onClick={onClickMock} />);

  letters.forEach((letter) => {
    const button = screen.getByText(letter);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });

  expect(onClickMock).toHaveBeenCalledTimes(4);
});