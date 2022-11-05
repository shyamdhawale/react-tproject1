import React, { useState } from "react";
import DimensionsTable from "./DimesionsTable";

const DimensionAddDeleteRow = ({ saveData, remarkData }) => {
  const [rowsData, setRowsData] = useState(remarkData || []);
  const addTableRows = () => {
    const rowsInput = {
      srno: "",
      description: "",
      dimensionreq: "",
      dimensionobserd: "",
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
        <th>DESCRIPTION</th>
        <th>DIMENSION Reqd.(mm)</th>
        <th>DIMENSION OBSEREVED (mm)</th>
      </tr>
      {/* </thead> */}
      <DimensionsTable
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></DimensionsTable>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default DimensionAddDeleteRow;
