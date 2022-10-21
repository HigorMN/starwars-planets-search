import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';

export default function SortToColumns() {
  const {
    columnSort, setColumnSort,
    setSortRadio, handleBtnSort,
    sortRadio,
  } = useContext(ContextStarwars);
  return (
    <form>
      <select
        value={ columnSort }
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setColumnSort(value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          name="ORDER"
          value="ASC"
          id="ASC"
          data-testid="column-sort-input-asc"
          onClick={ ({ target: { value } }) => setSortRadio(value) }
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          name="ORDER"
          id="DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
          onClick={ ({ target: { value } }) => setSortRadio(value) }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={
          () => handleBtnSort({ order: { column: columnSort, sort: sortRadio } })
        }
      >
        Ordenar
      </button>
    </form>
  );
}
