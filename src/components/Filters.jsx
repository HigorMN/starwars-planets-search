import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';

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
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ ({ target: { value } }) => setNameFilter(value.toLowerCase()) }
      />
      <div>
        <label htmlFor="coluna">
          Coluna
          <select
            id="coluna"
            value={ columnFilter }
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setColumnFilter(value) }
          >
            {column.map((e, index) => (
              <option key={ index } value={ e }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="operador">
          Operador
          <select
            id="operador"
            value={ comparisonFilter }
            data-testid="comparison-filter"
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
          onChange={ ({ target: { value } }) => setValueFilter(value) }
        />
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ clickBtnFilter }
      >
        filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clickBtnRemoveFiltrs }
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
            x
          </button>
        </div>
      ))}

    </form>
  );
}
