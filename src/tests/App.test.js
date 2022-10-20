import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação', () => {
  test('Se todos os filtros aparece na tela', async () => {
    render(<App />);
    const nameFilter = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    expect(nameFilter).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
  });

  test('Testando o maior que', () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.type(valueFilter, '200000');
    userEvent.click(buttonFilter);

    expect(comparisonFilter.value).toBe('maior que');
    expect(columnFilter.value).toBe('orbital_period');
  });

  test('Testando o menor que', () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(columnFilter, 'orbital_period');
    userEvent.selectOptions(comparisonFilter, 'menor que');
    userEvent.type(valueFilter, '500');
    userEvent.click(buttonFilter);

    expect(comparisonFilter.value).toBe('menor que');
    expect(columnFilter.value).toBe('population');
  });

  test('Testando o igual a', () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '1000');
    userEvent.click(buttonFilter);

    expect(comparisonFilter.value).toBe('igual a');
  });

  test('Se o name filter funciona', async () => {
    render(<App />);
    const nameFilter = screen.getByTestId('name-filter');
    userEvent.type(nameFilter, 'Tatooine');

    const tatooineName = await screen.findByText(/tatooine/i, {}, {timeout: 4000})
    const alderaanName = screen.queryByText(/alderaan/i)
    
    expect(tatooineName).toBeInTheDocument();
    expect(alderaanName).not.toBeInTheDocument();
  })
})
