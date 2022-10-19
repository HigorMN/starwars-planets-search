import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';

export default function Filters() {
  const { nameFilter, handleNameFilter } = useContext(ContextStarwars);
  return (
    <div>
      <h1>Filters</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter.name }
        onChange={ ({ target: { value } }) => handleNameFilter(value.toLowerCase()) }
      />
    </div>
  );
}
