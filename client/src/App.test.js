import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders characters headline', () => {
  const { getByText } = render(<App />);
  const headlineElement = getByText(/Characters/i);
  expect(headlineElement).toBeInTheDocument();
});
