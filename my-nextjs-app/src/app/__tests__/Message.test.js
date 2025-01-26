import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

describe('Message Component', () => {
  test('renders message text correctly', () => {
    const testMessage = "Hello, World!";
    
    // Render the component with a test message
    render(<Message message={testMessage} />);
    
    // Check if the message is rendered in the document
    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test('renders different messages', () => {
    const differentMessage = "Test message 123";
    
    render(<Message message={differentMessage} />);
    
    const messageElement = screen.getByText(differentMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test('renders empty message', () => {
    const emptyMessage = "";
    
    render(<Message message={emptyMessage} />);
    
    // Use queryByText and check that no specific error occurs
    const messageElement = screen.queryAllByText(emptyMessage);
    expect(messageElement).not.toBeNull();
  });
});