import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarwars from './ContextStarwars';

const objColumn = {
  population: 'population',
  orbital_period: 'orbital_period',
  diameter: 'diameter',
  rotation_period: 'rotation_period',
  surface_water: 'surface_water',
};

const arryColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function ProviderStarWars({ children }) {
  const [dataApiPlanets, setdataApiPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [column, setColumn] = useState(arryColumn);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  useEffect(() => {
    const fetchApiPlanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      const { results } = await (await fetch(endpoint)).json();
      const removeResidents = results.filter((e) => delete e.residents);
      setdataApiPlanets(removeResidents);
    };
    fetchApiPlanets();
  }, []);

  const clickBtnFilter = useCallback(() => {
    const newColumn = column.filter((e) => e !== objColumn[columnFilter]);
    setColumnFilter(newColumn[0]);
    setColumn(newColumn);
    if (comparisonFilter === 'menor que') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] < +valueFilter));
    }
    if (comparisonFilter === 'igual a') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] === valueFilter));
    }
    if (comparisonFilter === 'maior que') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] > +valueFilter));
    }
  }, [column, columnFilter, comparisonFilter, dataApiPlanets, valueFilter]);

  const value = useMemo(
    () => ({
      dataApiPlanets,
      nameFilter,
      columnFilter,
      comparisonFilter,
      valueFilter,
      column,
      setNameFilter,
      setColumnFilter,
      setComparisonFilter,
      setValueFilter,
      clickBtnFilter,
    }),
    [
      dataApiPlanets,
      nameFilter,
      columnFilter,
      comparisonFilter,
      valueFilter,
      clickBtnFilter,
      column,
    ],
  );

  return (
    <ContextStarwars.Provider value={ value }>
      {children}
    </ContextStarwars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
