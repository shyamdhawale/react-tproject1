import React, { useState } from "react";
import TableRow from "./TableRow";

const AddDeleteRow = ({ saveData }) => {
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = () => {
    const rowsInput = {
      srno: "",
      characteristics: "",
      dimention: "",
      tolerance: "",
      classification: "",
      equipment: "",
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
        <th>Characteristics</th>
        <th>Dimention</th>
        <th>Tolerance</th>
        <th>CLASSIFICATION</th>
        <th>Equipment</th>
      </tr>
      {/* </thead> */}
      <TableRow
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></TableRow>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default AddDeleteRow;
