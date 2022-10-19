import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarwars from './ContextStarwars';

function ProviderStarWars({ children }) {
  const [dataApiPlanets, setdataApiPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

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

  const value = useMemo(() => ({
    dataApiPlanets,
    nameFilter,
    handleNameFilter,
  }), [dataApiPlanets, nameFilter]);

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
