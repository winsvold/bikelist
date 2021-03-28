import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Bikelist',() => {
  test('rendrer uten å krasje', async () => {
    render(<App />);
    const header = await screen.findByRole('heading', { name: /Bysykler i Oslo/i });
    expect(header).toBeInTheDocument();
  });
})
