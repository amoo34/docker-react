// src/HelloWorld.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, World! text', () => {
  render(<App />);
  const helloElement = screen.getByText(/count/i);
  expect(helloElement).toBeDefined();
});
