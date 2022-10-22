import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import Table from './components/Table';
import ProviderStarWars from './context/ProviderStarwars';

function App() {
  return (
    <ProviderStarWars>
      <Header />
      <div className="traco" />
      <main className="container">
        <Filters />
        <Table />
      </main>
    </ProviderStarWars>
  );
}

export default App;
