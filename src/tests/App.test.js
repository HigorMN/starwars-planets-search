import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const ASC = [  
  'Yavin IV', 'Tatooine',
  'Bespin',   'Endor',
  'Kamino',   'Alderaan',
  'Naboo',    'Coruscant',
  'Hoth',     'Dagobah'
];

const DESC = [ 
  'Coruscant', 'Naboo',
  'Alderaan',  'Kamino',
  'Endor',     'Bespin',
  'Tatooine',  'Yavin IV',
  'Hoth',      'Dagobah'
];

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

  jest.setTimeout(20000)
  test('Se o name filter funciona', async () => {
    render(<App />);
    const nameFilter = screen.getByTestId('name-filter');
    userEvent.type(nameFilter, 'Tatooine');

    const tatooineName = await screen.findByText(/tatooine/i, {}, {timeout: 10000})
    
    expect(tatooineName).toBeInTheDocument();
  })

  test('Testando o maior que', () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const buttonRemoveFilter = screen.getByTestId('button-remove-filters');

    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.type(valueFilter, '200000');
    userEvent.click(buttonFilter);

    expect(comparisonFilter.value).toBe('maior que');
    expect(columnFilter.value).toBe('orbital_period');
    userEvent.click(buttonRemoveFilter)
    expect(columnFilter.value).toBe('population');
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

    const allBtnRemove = screen.getAllByText(/excluir/i);
    userEvent.click(allBtnRemove[0]);
  });

  test('Testando o igual a', () => {
    render(<App />);
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '1000');
    userEvent.click(buttonFilter);

    expect(comparisonFilter.value).toBe('igual a');
  });

  jest.setTimeout(40000)
  test('Adicionando e removendo todos os filtros', async () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    const tatooineName = await screen.findByText(/tatooine/i, {}, {timeout: 20000})
    expect(tatooineName).toBeInTheDocument();

    userEvent.selectOptions(columnFilter, 'orbital_period');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, '20');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'diameter');
    userEvent.selectOptions(comparisonFilter, 'menor que');
    userEvent.type(valueFilter, '20000');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'population');
    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '2000000000');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'rotation_period');
    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '24');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'surface_water');
    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '40');
    userEvent.click(buttonFilter);

    expect(screen.getByText(/Alderaan/i)).toBeInTheDocument();

    expect(comparisonFilter.value).toBe('igual a');
    expect(columnFilter.value).toBe('');

    const allBtnRemove = screen.getAllByText(/excluir/i);

    allBtnRemove.forEach((e) => {
      userEvent.click(e);
    })
    expect(tatooineName).toBeInTheDocument();
  });

  jest.setTimeout(40000)
  test('Adicionando e removendo todos os filtros e tensando o maior que', async () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    const tatooineName = await screen.findByText(/tatooine/i, {}, {timeout: 20000})
    expect(tatooineName).toBeInTheDocument();

    userEvent.selectOptions(columnFilter, 'orbital_period');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, '20');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'diameter');
    userEvent.selectOptions(comparisonFilter, 'menor que');
    userEvent.type(valueFilter, '20000');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'population');
    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '2000000000');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'rotation_period');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.type(valueFilter, '20');
    userEvent.click(buttonFilter);
    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'surface_water');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.type(valueFilter, '20');
    userEvent.click(buttonFilter);

    expect(screen.getByText(/Alderaan/i)).toBeInTheDocument();

    expect(comparisonFilter.value).toBe('maior que');
    expect(columnFilter.value).toBe('');

    const allBtnRemove = screen.getAllByText(/excluir/i);

    allBtnRemove.forEach((e) => {
      userEvent.click(e);
    })
    expect(tatooineName).toBeInTheDocument();
  });

  jest.setTimeout(40000)
  test('Testando se ordenda de forma Ascendente e Desendente a população', async () => {
    render(<App />);
    const columnSort = screen.getByTestId('column-sort');
    const inputAsc = screen.getByTestId('column-sort-input-asc');
    const InputDesc = screen.getByTestId('column-sort-input-desc');
    const buttonOrder = screen.getByTestId('column-sort-button');

    expect(columnSort).toBeInTheDocument();
    expect(inputAsc).toBeInTheDocument();
    expect(InputDesc).toBeInTheDocument();
    expect(buttonOrder).toBeInTheDocument();

    const tatooineName = await screen.findByText(/tatooine/i, {}, {timeout: 20000})
    expect(tatooineName).toBeInTheDocument();

    userEvent.selectOptions(columnSort, 'population');
    userEvent.click(inputAsc);
    userEvent.click(buttonOrder);

    const planetNames = screen.getAllByTestId('planet-name');
    planetNames.forEach((names, index) => {
      expect(names.innerHTML).toBe(ASC[index]);
    })
    userEvent.click(InputDesc);
    userEvent.click(buttonOrder);
    planetNames.forEach((names, index) => {
      expect(names.innerHTML).toBe(DESC[index]);
    })
  });
})
