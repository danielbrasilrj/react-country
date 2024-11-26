import {Capital, Country} from "../data/Types";

export async function getAllCountries() : Promise<Country[]> {
  const url = "https://countriesnow.space/api/v0.1/countries";

  const response = await fetch(url);
  const json = await response.json();
  return json.data as Promise<Country[]>;
}

export async function getCapitalByCountryIso2( iso2: string ) : Promise<Capital> {
  const url = "https://countriesnow.space/api/v0.1/countries/capital";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ iso2: iso2 }),
  });
  const json = await response.json();
  return json.data as Promise<Capital>;
}

export async function getCountryFlagByIso2( iso2: string ) : Promise<Country> {
  const url = "https://countriesnow.space/api/v0.1/countries/flag/images";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ iso2: iso2 }),
  });
  const json = await response.json();
  return json.data as Promise<Country>;
}
