import React from 'react';
import Filter from './components/Filters';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/AppProvider';

function App() {
  return (
    <Provider>
      <Header />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
