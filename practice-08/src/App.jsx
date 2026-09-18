import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  // function a() {
  //   console.log("function a is running.");
  // }
  // a();
  useEffect(
    function () {
      console.log("Function is running in use Effect.");
    },
    [num],
  );

  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Button
      </button>

      <h1>{num2}</h1>
      <button
        onClick={() => {
          setNum2(num2 + 10);
        }}
      >
        Button
      </button>
    </>
  );
}

export default App;
