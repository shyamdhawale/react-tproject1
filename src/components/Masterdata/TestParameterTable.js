import React from "react";

const TestParameterTable = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const { testparameter, hotside, coldside } = data;

    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            name="testparameter"
            value={testparameter}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="hotside"
            value={hotside}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="coldside"
            value={coldside}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>

        <td>
          <button onClick={() => deleteTableRows(index)}>Delete Row</button>
        </td>
      </tr>
    );
  });
};

export default TestParameterTable;
