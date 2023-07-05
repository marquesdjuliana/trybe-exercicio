import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [availableColumns, setAvailableColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const fetchPlanets = async () => {
    const URL = 'https://swapi.dev/api/planets';
    const response = await fetch(URL);
    const { results } = await response.json();

    const allPlanets = results.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(allPlanets);
    setFilteredData(allPlanets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filterNumericData = () => {
    const { column, comparison, value } = numericFilter;
    const newFilter = (planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    };

    const updatedFilters = [...appliedFilters, newFilter];
    const filtered = updatedFilters.reduce((prevFilteredData, filter) => prevFilteredData
      .filter(filter), data);

    setAppliedFilters(updatedFilters);
    setFilteredData(filtered);
    setNumericFilter({
      column: availableColumns.filter((col) => col !== column)[0],
      comparison: 'maior que',
      value: 0,
    });
    setAvailableColumns((prevColumns) => prevColumns.filter((col) => col !== column));
  };

  const removeNumericFilter = (index) => {
    const updatedFilters = [...appliedFilters];
    updatedFilters.splice(index, 1);

    const filtered = updatedFilters.reduce((prevFilteredData, filter) => prevFilteredData
      .filter(filter), data);

    setAppliedFilters(updatedFilters);
    setFilteredData(filtered);
    setAvailableColumns((prevColumns) => [...prevColumns, appliedFilters[index].column]);
  };

  const removeAllNumericFilters = () => {
    setAppliedFilters([]);
    setFilteredData(data);
    setAvailableColumns([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  const context = {
    data,
    setData,
    filteredData,
    setFilteredData,
    numericFilter,
    setNumericFilter,
    filterNumericData,
    availableColumns,
    appliedFilters,
    removeNumericFilter,
    removeAllNumericFilters,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
