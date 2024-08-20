import React, {ReactNode, useEffect} from "react";
import {Capital, Country} from "../data/Types";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {getAllCountries, getCapitalByCountryIso2} from "../service/countryService";

export type CountryListProps = {
  countries: Country[] | undefined;
}

export const CountryList = (props: CountryListProps) => {
  const { countries } = props;
  const [iso2, setIso2] = React.useState('');
  const [capital, setCapital] = React.useState<Capital | undefined>(undefined);

  const renderCountries = (): ReactNode => {
    return countries?.map((country: Country) => (
        <MenuItem value={country.iso2}>
          {country.country}
        </MenuItem>
    ))
  }

  const handleChange = (event: SelectChangeEvent) => {
    setIso2(event.target.value as string);
  };

    useEffect(() => {
        if(iso2 === '') {
            return
        }
        getCapitalByCountryIso2(iso2).then(result => {
            setCapital(result)
        });
    }, [iso2]);

  // On handleChange, we need to call getCapitalByCountryIso2 and render the capital name.

  return (
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Countries</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={iso2}
              label="Countries"
              onChange={handleChange}
          >
              {renderCountries()}
          </Select>
          <div>iso2 - {iso2}</div>
          <div>Capital - {capital?.name}</div>
      </FormControl>
  )
}
