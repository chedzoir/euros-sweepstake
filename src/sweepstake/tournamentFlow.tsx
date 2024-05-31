import { useCountries } from "./countries";
import { Group } from "./group";
import { Match } from "./match";
import { useSweepstakeEntries } from "./sweepstakeEntriesHook";

import "./tournament.css";

export const TournamentFlow = () => {
  const { countries } = useCountries();
  const { entries, schedule } = useSweepstakeEntries();

  const rounds = [
    {
      field: "roundOf16",
      title: "Round Of 16",
      start: 0,
      end: 4,
    },
    {
      field: "quarters",
      title: "Quarter Finals",
      start: 0,
      end: 2,
    },
    {
      field: "semi",
      title: "Semi Final",
      start: 0,
      end: 1,
    },
    {
      field: "final",
      title: "Final",
      start: 0,
      end: 1,
    },
    {
      field: "semi",
      title: "Semi Final",
      start: 1,
      end: 2,
    },
    {
      field: "quarters",
      title: "Quarter Finals",
      start: 2,
      end: 4,
    },
    {
      field: "roundOf16",
      title: "Round Of 16",
      start: 4,
      end: 8,
    },
  ];

  const findCountry = (code: string) => countries.find((c) => c.code === code);

  const entryArray = Object.values(entries);
  return (
    <div className="tournament">
      <div>
        <div>
          <div className="round-header">Group Stages</div>
          <div className="round-matches">
            <Group group="A" countries={countries.filter((c) => c.group === "A")} entries={entryArray} />
            <Group group="B" countries={countries.filter((c) => c.group === "B")} entries={entryArray} />
            <Group group="C" countries={countries.filter((c) => c.group === "C")} entries={entryArray} />
          </div>
        </div>

        {schedule &&
          rounds.map((r, ind) => (
            <div className="round" key={ind}>
              <div className="round-header">{r.title}</div>
              <div className="round-matches">
                {schedule[r.field]
                  ?.slice(r.start, r.end)
                  .map((m, mtchInd) => (
                    <Match
                      key={mtchInd}
                      team1={findCountry(m.team1)}
                      team2={findCountry(m.team2)}
                      entries={entryArray}
                      rightSide={ind > 3}
                    />
                  ))}
              </div>
            </div>
          ))}
        <div>
          <div className="round-header">Group Stages</div>
          <div className="round-matches">
            <Group group="D" countries={countries.filter((c) => c.group === "D")} entries={entryArray} rightSide />
            <Group group="E" countries={countries.filter((c) => c.group === "E")} entries={entryArray} rightSide />
            <Group group="F" countries={countries.filter((c) => c.group === "F")} entries={entryArray} rightSide />
          </div>
        </div>
      </div>
    </div>
  );
};
