import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';

export default function Filters() {
  const {
    nameFilter, handleNameFilter,
    columnFilter, handleColumnFilter,
    comparisonFilter, handleComparisonFilter,
    valueFilter, handleValueFilter,
    clickBtnFilter,
  } = useContext(ContextStarwars);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter.name }
        onChange={ ({ target: { value } }) => handleNameFilter(value.toLowerCase()) }
      />
      <div>
        <label htmlFor="coluna">
          Coluna
          <select
            id="coluna"
            value={ columnFilter }
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => handleColumnFilter(value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="operador">
          Operador
          <select
            id="operador"
            value={ comparisonFilter }
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => handleComparisonFilter(value) }
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
          onChange={ ({ target: { value } }) => handleValueFilter(value) }
        />
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ clickBtnFilter }
      >
        filtrar
      </button>
    </form>
  );
}
