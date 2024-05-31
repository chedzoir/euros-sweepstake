import { Position } from "./position";
import { Entry, useSweepstakeEntries } from "./sweepstakeEntriesHook";
import "./sweepstakeGrid.css";

const exitStages = ["groupStage", "roundOf16", "quarters", "semis", "runnerUp", "winner"];

export const SweepstakeGrid = () => {
  const { entries, exits } = useSweepstakeEntries();

  const exitStage = (entry: Entry) => {
    if (!exits) {
      return false;
    }

    if (!entry.selectedCountry?.code) {
      return false;
    }

    for (let stage of exitStages) {
      const check = exits[stage];

      if (Array.isArray(check)) {
        if (check.includes(entry.selectedCountry.code)) {
          return stage;
        }
      } else if (exits[stage] === entry.selectedCountry.code) {
        return stage;
      }
    }

    return false;
  };

  const tableBody = [];
  for (let i = 0; i < 12; i++) {
    tableBody.push(
      <tr key={i}>
        <td className="number">{i + 1}</td>
        <td className={`entrant-name ${exitStage(entries[i + 1]) || ""}`}>{entries[i + 1]?.name}</td>
        <td className={`team ${exitStage(entries[i + 1]) || ""}`}>
          <Position country={entries[i + 1]?.selectedCountry} />
        </td>
        {i == 0 && <td rowSpan={12}>&nbsp;</td>}
        <td className={`team ${exitStage(entries[i + 13]) || ""}`}>
          <Position country={entries[i + 13]?.selectedCountry} rightSide />
        </td>
        <td className={`entrant-name ${exitStage(entries[i + 13]) || ""}`}>{entries[i + 13]?.name}</td>
        <td className="number">{i + 13}</td>
      </tr>,
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table className="sweepstake-grid">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Team</th>
            <th>&nbsp;</th>
            <th>Team</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};
