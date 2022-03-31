import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi1");
    return () => console.log("bye1");
  }, []);

  // 위,아래 같은 방식이지만 위의 방식이 훨씬 간편!
  useEffect(function () {
    console.log("hi2");
    return function () {
      console.log("bye2");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
