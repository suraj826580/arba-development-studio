import { useState } from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [accepted, setAccepted] = useState(false);
  return (
    <>
      <MainRoutes accepted={accepted} setAccepted={setAccepted} />
    </>
  );
}

export default App;
