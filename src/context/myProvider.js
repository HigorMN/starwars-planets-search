import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

const INITIAL_STATE = { };

function Provider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
