import React, {useEffect, useState} from "react";
import {CountryList} from "../components/CountryList";
import {Country} from "../data/Types";
import {getAllCountries} from "../service/countryService";

export const Home =() => {

  const [countries, setCountries] = useState<Country[] | undefined>([]);
    useEffect(() => {
        getAllCountries().then(result => {
            setCountries(result);
        });
    }, []);

  return (
      <div>
        <CountryList countries={countries} />
      </div>
  );
}
