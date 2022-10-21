import React from 'react';
import './App.css';
import Filters from './components/Filters';
import SortToColumns from './components/SortToColumns';
import Table from './components/Table';
import ProviderStarWars from './context/ProviderStarwars';

function App() {
  return (
    <ProviderStarWars>
      <Filters />
      <SortToColumns />
      <Table />
    </ProviderStarWars>
  );
}

export default App;
