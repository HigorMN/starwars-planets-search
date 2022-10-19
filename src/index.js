import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProviderStarWars from './context/ProviderStarwars';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <ProviderStarWars>
      <App />
    </ProviderStarWars>,
  );
