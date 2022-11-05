import React from "react";

const ObservationTable = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const {
      hydroside,
      guageidno,
      guagerangekg,
      calibrationvalid,
      observedpressure,
    } = data;

    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            name="hydroside"
            value={hydroside}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="guageidno"
            value={guageidno}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="guagerangekg"
            value={guagerangekg}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="calibrationvalid"
            value={calibrationvalid}
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
        <td>
          <input
            type="text"
            name="observedpressure"
            value={observedpressure}
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

export default ObservationTable;
