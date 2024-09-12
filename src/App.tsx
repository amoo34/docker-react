import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + Node</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} sdfasfds
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save 
        </p>
      </div> 
      <p className="read-the-docs">
        Click on the Vite and 
      </p>
    </>
  );
}

export default App;
