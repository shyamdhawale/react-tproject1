import React, { useRef, useState } from "react";
import AddDeleteRow from "./AddDeleteRow";
import RemarkAddDeleteRow from "./RemarkAddDeleteRow";

const MasterPrechecklist = () => {
  const [rowData, setRowData] = useState([]);
  const [remarkData, setRemarkData] = useState([]);
  const supplierRef = useRef();
  const customerRef = useRef();
  const vendorCodeRef = useRef();
  const classificationMainRef = useRef();
  const partnameRef = useRef();
  const criticalRef = useRef();
  const partnoRef = useRef();
  const partrevisionRef = useRef();
  const mfgsrnoRef = useRef();
  const tranterdrgnoRef = useRef();
  const majorRef = useRef();
  const minorRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    // console.log(event);

    const preData = {
      partrevision: partrevisionRef.current.value,
      mfgsrno: mfgsrnoRef.current.value,

      logo: "tranterlogo",
      reportname: "PRE-DESPATCH INSPECTION CHECKLIST",
      reportno: "",
      supplier: supplierRef.current.value,
      vendorcode: vendorCodeRef.current.value,
      classificationmain: classificationMainRef.current.value,
      customer: customerRef.current.value,
      critical: criticalRef.current.value,
      major: majorRef.current.value,
      minor: minorRef.current.value,
      partname: partnameRef.current.value,
      partno: partnoRef.current.value,
      drgno: tranterdrgnoRef.current.value,
      characteristicsmain: rowData,
      remarks: remarkData,
    };

    fetch("http://192.168.1.13:3001/template", {
      method: "POST",
      body: JSON.stringify(preData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    console.log(preData);
    event.target.reset();

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    // setRowData([]);
    // setRemarkData([]);
  }

  // function abc(a, b = 0) {
  //   const min = a - b;
  //   const max = a + b;

  //   return { min: min, max: max };
  // }

  return (
    <form onSubmit={submitFormHandler}>
      <table>
        <caption>PRE-DESPATCH INSPECTION CHECKLIST</caption>
        <tbody>
          <tr>
            <th>SUPPLIER:</th>
            <td>
              <input type="text" ref={supplierRef} />
            </td>
            <th>CUSTOMER:</th>
            <td>
              <input type="text" ref={customerRef} />
            </td>
          </tr>
          <tr>
            <th>VENDER CODE:</th>
            <td>
              <input type="text" ref={vendorCodeRef} />
            </td>
            <th>CLASSIFICATION:</th>
            <td>
              <input type="text" ref={classificationMainRef} />
            </td>
          </tr>
          <tr>
            <th>PART NAME:</th>
            <td>
              <input type="text" ref={partnameRef} />
            </td>
            <th>CRITICAL:</th>
            <td>
              <input type="text" ref={criticalRef} />
            </td>
          </tr>
          <tr>
            <th>PART NO:</th>
            <td>
              <input type="text" ref={partnoRef} />
            </td>
            <th>PART REVISION:</th>
            <td>
              <input type="text" ref={partrevisionRef} />
            </td>
          </tr>
          <tr>
            <th>MFG. SR. NO.:</th>
            <td>
              <input type="text" ref={mfgsrnoRef} />
            </td>
            <th>MAJOR:</th>
            <td>
              <input type="text" ref={majorRef} />
            </td>
          </tr>
          <tr>
            <th>TRANTER DRG NO.:</th>
            <td>
              <input type="text" ref={tranterdrgnoRef} />
            </td>
            <th>MINOR:</th>
            <td>
              <input type="text" ref={minorRef} />
            </td>
          </tr>
          <AddDeleteRow saveData={(row) => setRowData(row)} />
        </tbody>
      </table>
      <table>
        <caption>REMARKS</caption>
        <tbody>
          <RemarkAddDeleteRow
            saveData={(e) => setRemarkData(e)}
            remarkData={remarkData}
          />
        </tbody>
      </table>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default MasterPrechecklist;
