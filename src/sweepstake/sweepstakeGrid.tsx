import { useSweepstakeEntries } from "./sweepstakeEntriesHook";
import "./sweepstakeGrid.css";

export const SweepstakeGrid = () => {
  const { entries } = useSweepstakeEntries();

  const tableBody = [];
  for (let i = 0; i < 12; i++) {
    tableBody.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>&nbsp;</td>
        <td>{entries[i + 1]?.name}</td>
        {i == 0 && <td rowSpan={12}>&nbsp;</td>}
        <td>&nbsp;</td>
        <td>{entries[i + 13]?.name}</td>
        <td>{i + 13}</td>
      </tr>,
    );
  }

  return (
    <div>
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
