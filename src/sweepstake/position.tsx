import { Country } from "./countries";
import { Flag } from "./flag";
import { Entry } from "./sweepstakeEntriesHook";

type PositionProps = {
  country: Country | undefined;
  entry?: Entry;
  rightSide?: boolean;
};

export const Position = ({ country, entry, rightSide = false }: PositionProps) => {
  return (
    <div className="position" style={{ display: "flex", flexDirection: rightSide ? "row-reverse" : "row" }}>
      <div className="flag">
        <Flag country={country} />
      </div>
      <div className="flag-label">
        <div className="country-name">{country?.name || <>&nbsp;</>}</div>
        <div className="entry-name">{entry?.name}</div>
      </div>
    </div>
  );
};
