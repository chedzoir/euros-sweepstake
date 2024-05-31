import { Country } from "./countries";
import { Position } from "./position";
import { Entry } from "./sweepstakeEntriesHook";

type MatchProps = {
  team1: Country | undefined;
  team2: Country | undefined;
  entries: Entry[];
  rightSide?: boolean;
};

const findEntry = (entries: Entry[], country: Country | undefined) =>
  country && entries.find((e) => e.selectedCountry?.code === country.code);

export const Match = ({ team1, team2, entries, rightSide = false }: MatchProps) => {
  return (
    <div className="match">
      <div className="country">
        <Position country={team1} entry={findEntry(entries, team1)} rightSide={rightSide} />
      </div>
      <div className="country">
        <Position country={team2} entry={findEntry(entries, team2)} rightSide={rightSide} />
      </div>
    </div>
  );
};
