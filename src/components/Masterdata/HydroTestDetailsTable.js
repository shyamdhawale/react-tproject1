import React, { useRef } from "react";

const HydroTestDetailsTable = () => {
  //   const [rowData, setRowData] = useState([]);
  //   const [remarkData, setRemarkData] = useState([]);
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
      reportname: "Hydro Test Details",
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
        <caption>Hydro Test Details</caption>
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
              <input type="checkbox" ref={acceptref} />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default HydroTestDetailsTable;
