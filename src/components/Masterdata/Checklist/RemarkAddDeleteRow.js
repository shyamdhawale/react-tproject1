import React, { useState } from "react";
import RemarkTableRow from "./RemarkTableRow";

const RemarkAddDeleteRow = ({ saveData, remarkData }) => {
  const [rowsData, setRowsData] = useState(remarkData || []);
  const addTableRows = () => {
    const rowsInput = {
      srno: "",
      remark: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);

    saveData(rows);
  };

  const handleChange = (index, evnt) => {
    // console.log(evnt.target);
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    saveData(rowsData);
  };

  return (
    <>
      {/* <thead> */}
      <tr>
        <th>SR. NO</th>
        <th>Remarks</th>
      </tr>
      {/* </thead> */}
      <RemarkTableRow
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></RemarkTableRow>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default RemarkAddDeleteRow;
