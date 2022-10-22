import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';

export default function SortToColumns() {
  const {
    columnSort, setColumnSort,
    setSortRadio, handleBtnSort,
    sortRadio,
  } = useContext(ContextStarwars);
  return (
    <form className="center">
      <select
        value={ columnSort }
        data-testid="column-sort"
        className="input-select"
        onChange={ ({ target: { value } }) => setColumnSort(value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div className="center asc-desc">
        <label htmlFor="ASC" className="labelsort">
          <input
            type="radio"
            name="ORDER"
            value="ASC"
            id="ASC"
            className="margim"
            data-testid="column-sort-input-asc"
            onClick={ ({ target: { value } }) => setSortRadio(value) }
          />
          Ascendente
        </label>
        <label htmlFor="DESC" className="labelsort">
          <input
            type="radio"
            name="ORDER"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input-desc"
            className="margim"
            onClick={ ({ target: { value } }) => setSortRadio(value) }
          />
          Descendente
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        className="btn-filter"
        onClick={
          () => handleBtnSort({ order: { column: columnSort, sort: sortRadio } })
        }
      >
        Ordenar
      </button>
    </form>
  );
}
