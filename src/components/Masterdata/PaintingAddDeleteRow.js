import React, { useState } from "react";
import PaintingTable from "./PaintingTable";

const PaintingAddDeleteRow = ({ saveData, remarkData }) => {
  const [rowsData, setRowsData] = useState(remarkData || []);
  const addTableRows = () => {
    const rowsInput = {
      painting: "",
      shortblasting: "",
      primer: "",
      finalpreaparation: "",
      totaldft: "",
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
        <th>Painting</th>
        <th>Short blasting</th>
        <th>Primer</th>
        <th>Final Preparation</th>
        <th>Total DFT</th>
      </tr>
      {/* </thead> */}
      <PaintingTable
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></PaintingTable>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default PaintingAddDeleteRow;
