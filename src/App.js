import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
