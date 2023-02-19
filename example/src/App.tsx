import React from "react";
import { RayCode } from "react-code-ray";
import "./App.css";

const code = `const a = 5 + 1 + "hello";`;

function App() {
  return (
    <div className="App">
      <RayCode code={code} language="ts" />
    </div>
  );
}

export default App;
