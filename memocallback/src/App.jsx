import { useMemo, useState, useCallback } from "react";
import "./App.css";
import NumberList from "./NumberList";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  },[number]);

  const theme = {
    backgroundColor: dark ? "#333" : "white",
    color: dark ? "white" : "#333",
  };
  return (
    <div className="App">
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change The Theme
      </button>
      <div style={theme}>{doubleNumber}</div>
      <NumberList getItems={getItems} />
    </div>
  );
}

function slowFunc(num) {
  console.log("Function called");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}

export default App;
