import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarwars from './ContextStarwars';

function ProviderStarWars({ children }) {
  const [dataApiPlanets, setdataApiPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
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

  const handleNameFilter = (name) => {
    setNameFilter(name);
  };

  const handleColumnFilter = (coluna) => {
    setColumnFilter(coluna);
  };

  const handleComparisonFilter = (operador) => {
    setComparisonFilter(operador);
  };

  const handleValueFilter = (value) => {
    setValueFilter(value);
  };

  const clickBtnFilter = () => {
    if (comparisonFilter === 'menor que') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] < +valueFilter));
    }
    if (comparisonFilter === 'igual a') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] === valueFilter));
    }
    if (comparisonFilter === 'maior que') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] > +valueFilter));
    }
  };

  const value = useMemo(() => ({
    dataApiPlanets,
    nameFilter,
    columnFilter,
    comparisonFilter,
    valueFilter,
    handleNameFilter,
    handleColumnFilter,
    handleComparisonFilter,
    handleValueFilter,
    clickBtnFilter,
  }), [
    dataApiPlanets, nameFilter, columnFilter, comparisonFilter, valueFilter]);

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
