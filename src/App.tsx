import { useState } from "react";
import "./App.css";
import { FlagRow } from "./sweepstake/flagRow";
import { SweepstakeGrid } from "./sweepstake/sweepstakeGrid";
import { TournamentFlow } from "./sweepstake/tournamentFlow";

function App() {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <>
      <div style={{ margin: "auto" }}>
        <div className="header">
          <a onClick={() => setShowFlow((mode) => !mode)}>{showFlow ? "Entry View" : "Tournament View"}</a>
        </div>
        <div className="content">
          <h2 style={{ marginBottom: "1em" }}>Walshe Academy Euro 2024 Sweepstake</h2>

          {showFlow ? <TournamentFlow /> : <SweepstakeGrid />}

          <FlagRow />
        </div>
      </div>
    </>
  );
}

export default App;
