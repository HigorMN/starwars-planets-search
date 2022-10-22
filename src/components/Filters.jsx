import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';
import './Filters.css';
import SortToColumns from './SortToColumns';
import vectorSearch from '../images/vector-search.png';

export default function Filters() {
  const {
    nameFilter, setNameFilter,
    columnFilter, setColumnFilter,
    comparisonFilter, setComparisonFilter,
    valueFilter, setValueFilter,
    clickBtnFilter, column, filter,
    clickBtnRemoveFiltrs, clickBtnRemoveFilter,
  } = useContext(ContextStarwars);
  return (
    <form className="Filters-container">
      <div className="center input-name-filter">
        <input
          type="text"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ ({ target: { value } }) => setNameFilter(value.toLowerCase()) }
        />
        <img src={ vectorSearch } alt="pesquisar pelo nome" className="vectorSearch" />
      </div>
      <div className="center filters-container">
        <label htmlFor="coluna" className="label">
          Coluna
          <select
            id="coluna"
            value={ columnFilter }
            data-testid="column-filter"
            className="input-select"
            onChange={ ({ target: { value } }) => setColumnFilter(value) }
          >
            {column.map((e, index) => (
              <option key={ index } value={ e }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="operador" className="label">
          Operador
          <select
            id="operador"
            value={ comparisonFilter }
            data-testid="comparison-filter"
            className="input-select"
            onChange={ ({ target: { value } }) => setComparisonFilter(value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          value={ valueFilter }
          className="input-number"
          onChange={ ({ target: { value } }) => setValueFilter(value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          className="btn-filter"
          onClick={ clickBtnFilter }
        >
          filtrar
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ clickBtnRemoveFiltrs }
          className="btn-filter"
        >
          Remover todas filtragens
        </button>

        {filter.map((e, index) => (
          <div data-testid="filter" key={ index }>
            <span>{`${e.columnFilter} ${e.comparisonFilter} ${e.valueFilter}`}</span>
            <button
              type="button"
              onClick={ () => clickBtnRemoveFilter(e.columnFilter) }
            >
              excluir
            </button>
          </div>
        ))}
        <SortToColumns />
      </div>
    </form>
  );
}
