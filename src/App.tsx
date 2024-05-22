import "./App.css";
import { FlagRow } from "./sweepstake/countries";
import { SweepstakeGrid } from "./sweepstake/sweepstakeGrid";

function App() {
  return (
    <>
      <div style={{ margin: "auto", width: "70%" }}>
        Euro 2024 Sweepstake
        <SweepstakeGrid />
        <FlagRow />
      </div>
    </>
  );
}

export default App;
