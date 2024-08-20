import React, {useEffect, useState} from "react";
import {CountryList} from "../components/CountryList";
import {Capital, Country} from "../data/Types";
import {getAllCountries, getCapitalByCountryIso2} from "../service/countryService";
import {CapitalDetails} from "../components/CapitalDetails";

export const Home =() => {

  const [iso2, setIso2] = React.useState('');
  const [capital, setCapital] = React.useState<Capital | undefined>(undefined);
  const [countries, setCountries] = useState<Country[] | undefined>([]);

  useEffect(() => {
        getAllCountries().then(result => {
            setCountries(result);
        });
    }, []);

    useEffect(() => {
        if(iso2 === '') {
            return
        }
        getCapitalByCountryIso2(iso2).then(result => {
            setCapital(result)
        });
    }, [iso2]);

    const handleCountryChange = (selectedIso2: string) => {
        setIso2(selectedIso2);
    };

  return (
      <div>
        <CountryList countries={countries} onCountryChanged={handleCountryChange} />
        <CapitalDetails capital={capital} />
      </div>
  );
}
