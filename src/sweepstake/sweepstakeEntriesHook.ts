import { useEffect, useState } from "react";

type Entry = {
  name: string;
  entryNumber: number;
  selectedCountry: string | undefined;
};

const convertToRecord = (entries: Entry[]): Record<number, Entry> => {
  const res: Record<number, Entry> = {};

  entries.forEach((e) => (res[e.entryNumber] = e));

  return res;
};

export const useSweepstakeEntries = () => {
  const [entries, setEntries] = useState<Record<number, Entry>>([]);

  useEffect(() => {
    const url = "/data.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setEntries(convertToRecord(data)));
  }, [setEntries]);

  return { entries };
};
