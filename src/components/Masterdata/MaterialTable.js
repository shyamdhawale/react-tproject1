import React from "react";

const MaterialTable = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const {
      srno,
      materrialdesc,
      moc,
      heatno,
      mtcno,
      // description,
      // dimensionreq,
      // dimensionobserved,
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
            name="materialdesc"
            value={materrialdesc}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="moc"
            value={moc}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="heatno"
            value={heatno}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="mtcno"
            value={mtcno}
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

export default MaterialTable;
