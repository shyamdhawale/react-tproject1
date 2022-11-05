import React from "react";

const PaintingTable = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const { Painting, Short_b, Primer, Final_prep, Toatal_dft } = data;

    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            name="painting"
            value={Painting}
            onChange={(evnt) => handleChange(evnt, index)}
          />
        </td>

        <td>
          <input
            type="text"
            name="Shot blasting"
            value={Short_b}
            onChange={(evnt) => handleChange(evnt, index)}
          />
        </td>

        <td>
          <input
            type="text"
            name="Primer"
            value={Primer}
            onChange={(evnt) => handleChange(evnt, index)}
          />
        </td>

        <td>
          <input
            type="text"
            name="Final Preparation"
            value={Final_prep}
            onChange={(evnt) => handleChange(evnt, index)}
          />
        </td>

        <td>
          <input
            type="text"
            name="Total DFT"
            value={Toatal_dft}
            onChange={(evnt) => handleChange(evnt, index)}
          />
        </td>

        <td>
          <button onClick={() => deleteTableRows(index)}>Delete Row</button>
        </td>
      </tr>
    );
  });
};

export default PaintingTable;
