import React from "react";

const DimensionsTable = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const { srno, description, dimensionreq, dimensionobserved } = data;

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
            name="description"
            value={description}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="dimensionreq"
            value={dimensionreq}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="dimensionobserved"
            value={dimensionobserved}
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

export default DimensionsTable;
