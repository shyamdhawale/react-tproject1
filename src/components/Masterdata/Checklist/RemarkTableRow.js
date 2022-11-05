import React from "react";

const RemarkTableRow = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const { srno, remark } = data;

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
            name="remark"
            value={remark}
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

export default RemarkTableRow;
