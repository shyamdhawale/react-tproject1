import React, { useState } from "react";
import MaterialTable from "./MaterialTable";

const MaterialAddDeleteRow = ({ saveData, remarkData }) => {
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
        <th>MATERIAL DESCRIPTION</th>
        <th>MOC</th>
        <th>HEAT NO</th>
        <th>MTC NO</th>
      </tr>
      {/* </thead> */}
      <MaterialTable
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></MaterialTable>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default MaterialAddDeleteRow;
