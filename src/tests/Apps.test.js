import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação', () => {
  test('Se todos os filters aparece na tela', () => {
    render(<App />);
    const nameFIlter = screen.getByTestId('name-filter');
    expect(nameFIlter).toBeInTheDocument();
  });
})
