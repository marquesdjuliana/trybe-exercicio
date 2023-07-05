import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { filteredData } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          {filteredData.length > 0
  && Object.keys(filteredData[0])
    .map((header, index) => (
      <th key={ index }>{header}</th>))}
        </tr>
      </thead>

      <tbody>

        {filteredData.length > 0 && filteredData.map((elem, i) => (
          <tr key={ i }>
            {filteredData.length > 0
  && Object.values(elem).map((header, index) => (
    <td
      key={ index }

    >
      {header}

    </td>))}
          </tr>))}

      </tbody>

    </table>
  );
}

export default Table;
