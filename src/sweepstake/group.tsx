import { Country } from "./countries";
import { Position } from "./position";
import { Entry } from "./sweepstakeEntriesHook";

type GroupProps = {
  group: string;
  countries: Country[];
  entries: Entry[];
  rightSide?: boolean;
};

const findEntry = (entries: Entry[], country: Country) => entries.find((e) => e.selectedCountry?.code === country.code);

export const Group = ({ group, countries, entries, rightSide = false }: GroupProps) => {
  return (
    <div className="group">
      <div className="header">Group {group}</div>
      {countries.map((c, ind) => (
        <div key={ind} className="country">
          <Position country={c} entry={findEntry(entries, c)} rightSide={rightSide} />
        </div>
      ))}
    </div>
  );
};
