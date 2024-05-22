import "./countries.css";

const countries = [
  {
    code: "ALB",
    name: "Albania",
  },
  {
    code: "AUT",
    name: "Austria",
  },
  {
    code: "BEL",
    name: "Belgium",
  },
  {
    code: "CRO",
    name: "Croatia",
  },
  {
    code: "CZE",
    name: "Czechia",
  },
  {
    code: "DEN",
    name: "Denmark",
  },
  {
    code: "ENG",
    name: "England",
  },
  {
    code: "ESP",
    name: "Spain",
  },
  {
    code: "FRA",
    name: "France",
  },
  {
    code: "GEO",
    name: "Georgia",
  },
  {
    code: "GER",
    name: "Germany",
  },
  {
    code: "HUN",
    name: "Hungary",
  },
  {
    code: "ITA",
    name: "Italy",
  },
  {
    code: "NED",
    name: "Netherlands",
  },
  {
    code: "POL",
    name: "Poland",
  },
  {
    code: "POR",
    name: "Portugal",
  },
  {
    code: "ROU",
    name: "Romania",
  },
  {
    code: "SCO",
    name: "Scotland",
  },
  {
    code: "SRB",
    name: "Serbia",
  },
  {
    code: "SUI",
    name: "Switzerland",
  },
  {
    code: "SVK",
    name: "Slovakia",
  },
  {
    code: "SVN",
    name: "Slovenia",
  },
  {
    code: "TUR",
    name: "Turkey",
  },
  {
    code: "UKR",
    name: "Ukraine",
  },
];

export const FlagRow = () => (
  <div className="flag-row">
    {countries
      .sort((a, b) => a.name.localeCompare(b.name))

      .map((c) => (
        <img src={`/flags/${c.code}.png`} key={c.code} alt={c.name} />
      ))}
  </div>
);
