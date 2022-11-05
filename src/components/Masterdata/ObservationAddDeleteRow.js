import React, { useState } from "react";
import ObservationTable from "./ObservationTable";

const ObservationAddDeleteRow = ({ saveData }) => {
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = () => {
    const rowsInput = {
      hydroside: "",
      gaugeidno: "",
      guagerangekg: "",
      calibrationvalid: "",
      observedpressure: "",
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
        <th>HYDRO SIDE</th>
        <th>GAUGE ID NO.</th>
        <th>GAUGE RANGE KG/CM<sup>2</sup> </th>
        <th>CALIBRATION VALID UPTO</th>
        <th>OBSERVED PRESSURE KG/CM<sup>2</sup></th>
      </tr>
      {/* </thead> */}
      <ObservationTable
        rowsData={rowsData}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      ></ObservationTable>
      <button onClick={addTableRows}>Add Row</button>
    </>
  );
};

export default ObservationAddDeleteRow;
