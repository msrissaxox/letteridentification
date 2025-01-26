import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewLetterButton from '../components/NewLetterButton';

test('NewLetterButton calls onClick handler', () => {
  const onClickMock = jest.fn();
  render(<NewLetterButton onClick={onClickMock} />);
  const button = screen.getByRole('button', { name: /new letter/i });
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalled();
});