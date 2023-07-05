import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const {
    data,
    setFilteredData,
    numericFilter,
    setNumericFilter,
    filterNumericData,
    availableColumns,
    appliedFilters,
    removeNumericFilter,
    removeAllNumericFilters,
  } = useContext(AppContext);

  const filterData = (text) => {
    const filtered = data.filter((planet) => planet.name.toLowerCase()
      .includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  const applyFilter = () => {
    filterNumericData(); // Filtra os dados com base nas configurações do filtro numérico
    setNumericFilter({ // Limpa as configurações do filtro numérico para os valores padrão
      column: availableColumns[0],
      comparison: 'maior que',
      value: 0,
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={ (e) => filterData(e.target.value) }
        data-testid="name-filter"
      />
      <select
        name="column"
        value={ numericFilter.column }
        onChange={ ({ target }) => setNumericFilter({ ...numericFilter,
          column: target.value }) }
        data-testid="column-filter"
      >
        {availableColumns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>

      <select
        name="comparison"
        value={ numericFilter.comparison }
        onChange={ ({ target }) => setNumericFilter({ ...numericFilter,
          comparison: target.value }) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        name="value"
        value={ numericFilter.value }
        onChange={ ({ target }) => setNumericFilter({ ...numericFilter,
          value: target.value }) }
        data-testid="value-filter"
      />

      <button onClick={ applyFilter } data-testid="button-filter">
        Filter
      </button>

      {appliedFilters.map((filter, index) => (
        <div key={ index } data-testid="filter">
          {/* Exibir informações do filtro aqui */}
          <button onClick={ () => removeNumericFilter(index) }>
            Remover
          </button>
        </div>
      ))}

      <button onClick={ removeAllNumericFilters } data-testid="button-remove-filters">
        Remover todas filtragens
      </button>
    </div>
  );
}

export default Filters;
