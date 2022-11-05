import React, { useRef, useState } from "react";
import DimensionAddDeleteRow from "./DimensionAddDeleteRow";
import MaterialAddDeleteRow from "./MaterialAddDeleteRow";
import PaintingAddDeleteRow from "./PaintingAddDeleteRow";
const Inpectionreport = () => {
  const [MaterialData, setMaterialData] = useState([]);
  const [DimensionData, setDimensionData] = useState([]);
  const [PaintingData, setPaintingData] = useState([]);
  const clientRef = useRef();
  const serialnoRef = useRef();
  const ponoRef = useRef();
  const modelRef = useRef();
  const tagnoRef = useRef();
  const drgnoRef = useRef();
  const mfgsrnoRef = useRef();
  const qapnoRef = useRef();
  const procedurenoref = useRef();
  const testpressurereqref = useRef();
  const pressuregaugenoref = useRef();
  const pressurehotsideref = useRef();
  const pressurecoldsideref = useRef();
  const durationref = useRef();
  const resultref = useRef();
  const certificatenoref = useRef();
  const obspressure1ref = useRef();
  const obspressure2ref = useRef();
  const obsref = useRef();
  const acceptref = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    // console.log(event);

    const preData = {
      logo: "tranterlogo",
      reportname: "INSPECTION REPORT",
      client: clientRef.current.value,
      serialno: serialnoRef.current.value,
      pono: ponoRef.current.value,
      model: modelRef.current.value,
      tagno: tagnoRef.current.value,
      drgno: drgnoRef.current.value,
      mfgsrno: mfgsrnoRef.current.value,
      qapno: qapnoRef.current.value,
      dimension: DimensionData,
      material: MaterialData,
      painting: PaintingData,
      procedureno: procedurenoref.current.value,
      pressuregaugeno: pressuregaugenoref.current.value,
      testpressurereq: testpressurereqref.current.value,
      pressurehotside: pressurehotsideref.current.value,
      pressurecoldside: pressurecoldsideref.current.value,
      duration: durationref.current.value,
      result: resultref.current.value,
      certificateno: certificatenoref.current.value,
      obspressure1: obspressure1ref.current.value,
      obspressure2: obspressure2ref.current.value,
      obs: obsref.current.value,
      accept: acceptref.current.value,
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
          <h3>INSPECTION REPORT</h3>
        </caption>
        <tbody>
          <tr>
            <th>CLIENT:</th>
            <td>
              <input type="text" ref={clientRef} />
            </td>
            <th>PO NO.:</th>
            <td>
              <input type="text" ref={ponoRef} />
            </td>
          </tr>
          <tr>
            <th>SERIAL NO.:</th>
            <td>
              <input type="text" ref={serialnoRef} />
            </td>
            <th>MODEL:</th>
            <td>
              <input type="text" ref={modelRef} />
            </td>
          </tr>
          <tr>
            <th>MFG.SR.NO. :</th>
            <td>
              <input type="text" ref={mfgsrnoRef} />
            </td>
            <th>TAG NO.:</th>
            <td>
              <input type="text" ref={tagnoRef} />
            </td>
          </tr>
          <tr>
            <th>QAP NO.:</th>
            <td>
              <input type="text" ref={qapnoRef} />
            </td>
            <th> Drg NO.:</th>
            <td>
              <input type="text" ref={drgnoRef} />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          {" "}
          <h3>Material Details</h3>
        </caption>
        <tbody>
          <MaterialAddDeleteRow
            saveData={(e) => setMaterialData(e)}
            MaterialData={MaterialData}
          />
        </tbody>
      </table>
      <table>
        <caption>
          <h3>Dimention Details</h3>
        </caption>
        <tbody>
          <DimensionAddDeleteRow
            saveData={(e) => setDimensionData(e)}
            DimensionData={DimensionData}
          />
        </tbody>
      </table>
      <table>
        <caption>
          <h3>Hydro Test Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Procedure No.:</th>
            <td>
              <input type="text" ref={procedurenoref} />
            </td>
            <th>Test Pressure Required:</th>
            <td>
              <input type="text" ref={testpressurereqref} />
            </td>
          </tr>
          <tr>
            <th>Pressure Gaugae No.:</th>
            <td>
              <input type="text" ref={pressuregaugenoref} />
            </td>
            <th>Certificate No.:</th>
            <td>
              <input type="text" ref={certificatenoref} />
            </td>
          </tr>
          <tr>
            <th>Pressure Hot Side:</th>
            <td>
              <input type="text" ref={pressurehotsideref} />
            </td>
            <th>Obs. Pressure.:</th>
            <td>
              <input type="text" ref={obspressure1ref} />
            </td>
          </tr>
          <tr>
            <th>Pressure Cold Side.:</th>
            <td>
              <input type="text" ref={pressurecoldsideref} />
            </td>
            <th> Obs Pressure:</th>
            <td>
              <input type="text" ref={obspressure2ref} />
            </td>
          </tr>
          <tr>
            <th>Duration:</th>
            <td>
              <input type="text" ref={durationref} />
            </td>
            <th> Obs:</th>
            <td>
              <input type="text" ref={obsref} />
            </td>
          </tr>
          <tr>
            <th>Result:</th>
            <td>
              <input type="text" ref={resultref} />
            </td>
            <th> Accepted:</th>
            <td>
              Yes <input type="checkbox" ref={acceptref} value="Yes" />
              No
              <input type="checkbox" ref={acceptref} value="No" />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          <h3>Painting Details</h3>
        </caption>
        <tbody>
          <PaintingAddDeleteRow
            saveData={(e) => setPaintingData(e)}
            PaintingData={PaintingData}
          />
        </tbody>
      </table>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Inpectionreport;
