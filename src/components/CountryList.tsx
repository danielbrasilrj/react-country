import React, {ReactNode} from "react";
import {Country} from "../data/Types";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export type CountryListProps = {
  countries: Country[] | undefined;
  onCountryChanged: (iso2: string) => void;
}

export const CountryList = (props: CountryListProps) => {
  const { countries, onCountryChanged } = props;

  const renderCountries = (): ReactNode => {
    return countries?.map((country: Country) => (
        <MenuItem value={country.iso2}>
          {country.country}
        </MenuItem>
    ))
  }

  const handleChange = (event: SelectChangeEvent) => {
      onCountryChanged(event.target.value as string);
  };

  return (
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Countries</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={iso2}
              label="Countries"
              onChange={handleChange}
          >
              {renderCountries()}
          </Select>
      </FormControl>
  )
}
