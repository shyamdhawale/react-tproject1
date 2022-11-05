import React, { useState } from "react";
import TestParameterTable from "./TestParameterTable";

const TestParameterAddDeleteRow = ({ saveData, remarkData }) => {
  const [rowsData, setRowsData] = useState(remarkData || []);
  const addTableRows = () => {
    const rowsInput = {
      testparameter: "",
      hotside: "",
      coldside: "",
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
        <th>TEST PARAMETERS</th>
        <th>HOT SIDE</th>
        <th>COLD SIDE</th>
      </tr>
      {/* </thead> */}
      <TestParameterTable
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></TestParameterTable>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default TestParameterAddDeleteRow;
