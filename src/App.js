import React from 'react';
import './App.css';
import Filters from './components/Filters';
import SortToColumns from './components/SortToColumns';
import Table from './components/Table';
import ProviderStarWars from './context/ProviderStarwars';

function App() {
  return (
    <ProviderStarWars>
      <main className="container">
        <Filters />
        <SortToColumns />
        <Table />
      </main>
    </ProviderStarWars>
  );
}

export default App;
