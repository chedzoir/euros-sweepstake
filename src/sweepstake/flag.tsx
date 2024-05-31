import { Country } from "./countries";

type FlagProps = {
  country: Country | undefined;
};

export const Flag = ({ country }: FlagProps) => {
  if (!country) {
    return null;
  }

  return <img className="flag" src={`/flags/${country.code}.png`} alt={country.name} />;
};
