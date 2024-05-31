import { useEffect, useState } from "react";
import { Country, useCountries } from "./countries";

type SavedEntry = {
  name: string;
  entryNumber: number;
  selectedCountry: string | undefined;
};

type DefinedTeam = {
  entryNumber: number;
  code: string;
};

export type Entry = {
  name: string;
  entryNumber: number;
  selectedCountry: Country | undefined;
};

type Match = {
  match: number;
  team1: string;
  team2: string;
};

type Schedule = {
  [key: string]: Match[];
  roundOf16: Match[];
  quarters: Match[];
  semi: Match[];
  final: Match[];
};

type Exits = {
  [key: string]: String[] | String;

  groupStage: string[];
  roundOf16: string[];
  quarters: string[];
  semis: string[];
  runnerUp: string;
  winner: string;
};

const convert = (data: { teams: DefinedTeam[]; entries: SavedEntry[] }, countries: Country[]) => {
  const res: Record<number, Entry> = {};

  data.entries.forEach((e) => {
    const teamMap = data.teams.find((t) => t.entryNumber === e.entryNumber);

    const selectedCountry = countries.find((c) => c.code === teamMap?.code);

    res[e.entryNumber] = {
      ...e,
      selectedCountry,
    };
  });

  return res;
};

export const useSweepstakeEntries = () => {
  const [entries, setEntries] = useState<Record<number, Entry>>([]);
  const [schedule, setSchedule] = useState<Schedule>();
  const [exits, setExits] = useState<Exits>();

  const { countries } = useCountries();

  useEffect(() => {
    const url = "/data.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEntries(convert(data, countries));
        setSchedule(data.schedule);
        setExits(data.exits);
      });
  }, [setEntries, countries, setSchedule, setExits]);

  return { entries, schedule, exits };
};
