import { useEffect, useState } from "react";

export type Country = {
  name: string;
  code: string;
  group: string;
};

export const useCountries: () => { countries: Country[] } = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const url = "/countries.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, [setCountries]);

  return { countries };
};
