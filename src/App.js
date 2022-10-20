import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import ProviderStarWars from './context/ProviderStarwars';

function App() {
  return (
    <ProviderStarWars>
      <Filters />
      <Table />
    </ProviderStarWars>
  );
}

export default App;
