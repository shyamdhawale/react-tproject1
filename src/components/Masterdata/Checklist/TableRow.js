import React from "react";

const TableRow = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const {
      srno,
      characteristics,
      dimention,
      tolerance,
      classification,
      equipment,
    } = data;

    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            name="srno"
            value={srno}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="characteristics"
            value={characteristics}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="dimention"
            value={dimention}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="tolerance"
            value={tolerance}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="classification"
            value={classification}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="equipment"
            value={equipment}
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

export default TableRow;
