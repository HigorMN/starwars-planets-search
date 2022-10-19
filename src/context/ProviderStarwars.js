import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarwars from './ContextStarwars';

function ProviderStarWars({ children }) {
  const [dataApiPlanets, setdataApiPlanets] = useState([]);

  useEffect(() => {
    const fetchApiPlanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      const { results } = await (await fetch(endpoint)).json();
      const removeResidents = results.filter((e) => delete e.residents);
      setdataApiPlanets(removeResidents);
    };
    fetchApiPlanets();
  }, []);

  return (
    <ContextStarwars.Provider value={ dataApiPlanets }>
      {children}
    </ContextStarwars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
