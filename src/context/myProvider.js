import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [dataAPIplanets, setdataAPIplanets] = useState([]);
  useEffect(() => {
    const fetchAPIplanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      const { results } = await (await fetch(endpoint)).json();
      setdataAPIplanets(results);
    };
    fetchAPIplanets();
  }, []);
  return (
    <MyContext.Provider value={ dataAPIplanets }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
