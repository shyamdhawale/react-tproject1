import React, { useRef, useState } from "react";
import TestParameterAddDeleteRow from "./TestParameterAddDeleteRow";
import ObservationAddDeleteRow from "./ObservationAddDeleteRow";
const HydrostaticTestReport = () => {
  const [TestParameterData, setTestParameterData] = useState([]);
  const [ObservationData, setObservationData] = useState([]);
  // const [PaintingData, setPaintingData] = useState([]);
  const reportnoRef = useRef();
  const modelRef = useRef();
  const tagnoRef = useRef();
  const drgnoRef = useRef();
  const mfgsrnoRef = useRef();
  const dateRef = useRef();
  const sonoref = useRef();
  const pdirnoref = useRef();
  const customerref = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    // console.log(event);

    const preData = {
      date: dateRef.current.value,
      sono: sonoref.current.value,
      model: modelRef.current.value,
      tagno: tagnoRef.current.value,
      drgno: drgnoRef.current.value,
      mfgsrno: mfgsrnoRef.current.value,
      pdirno: pdirnoref.current.value,
      customer: customerref.current.value,
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
        <caption>
          <h3>HYDROSTATIC TEST REPORT</h3>
        </caption>
        <tbody>
          <tr>
            <th>REPORT NO:</th>
            <td>
              <input type="text" ref={reportnoRef} />
            </td>
            <th>DATE:</th>
            <td>
              <input type="text" ref={dateRef} />
            </td>
          </tr>
          <tr>
            <th>S.O. NO.:</th>
            <td>
              <input type="text" ref={sonoref} />
            </td>
            <th>MFG.SR.NO:</th>
            <td>
              <input type="text" ref={mfgsrnoRef} />
            </td>
          </tr>
          <tr>
            <th>MODEL:</th>
            <td>
              <input type="text" ref={modelRef} />
            </td>
            <th>TAG NO.:</th>
            <td>
              <input type="text" ref={tagnoRef} />
            </td>
          </tr>
          <tr>
            <th>DRG.NO/REV NO.:</th>
            <td>
              <input type="text" ref={drgnoRef} />
            </td>
            <th> PDIR NO.:</th>
            <td>
              <input type="text" ref={pdirnoref} />
            </td>
          </tr>
          <tr>
            <th>CUSTOMER:</th>
            <td>
              <input type="text" ref={customerref} />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        {/* <caption>
          <h3>TEST PARAMETERS:</h3>
        </caption> */}
        <tbody>
          <TestParameterAddDeleteRow
            saveData={(e) => setTestParameterData(e)}
            TestParameterData={TestParameterData}
          />
        </tbody>
      </table>
      <table>
        <caption>
          <h3>OBSERVATIONS:</h3>
        </caption>
        <tbody>
          <ObservationAddDeleteRow
            saveData={(e) => setObservationData(e)}
            ObservationData={ObservationData}
          />
        </tbody>
      </table>

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default HydrostaticTestReport;
