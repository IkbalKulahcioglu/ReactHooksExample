import { useContext } from "react";
import { NumberContext} from "./App";

function Calculate() {
    const numberContext = useContext(NumberContext);
  return (
    <>
      <div>{numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>Increase</button>
      <button onClick={() => numberContext.dispatch("decrement")}>Decrease</button>
      <button onClick={() => numberContext.dispatch("reset")}>Reset</button>
    </>
  );
}

export default Calculate;
