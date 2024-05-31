import { useCountries } from "./countries";
import { Flag } from "./flag";
import "./flagRow.css";

export const FlagRow = () => {
  const { countries } = useCountries();

  return (
    <div className="flag-row">
      {countries
        .sort((a, b) => a.name.localeCompare(b.name))

        .map((c) => (
          <Flag key={c.code} country={c} />
        ))}
    </div>
  );
};
