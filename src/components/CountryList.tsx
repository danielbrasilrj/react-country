import React, { ReactNode } from "react";
import { Country } from "../data/Types";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { countrySelected } from "../features/country/countrySlice";

export type CountryListProps = {
  countries: Country[] | undefined;
  onCountryChanged: (iso2: string) => void;
}

// TODO Save the selected country on the redux context so when return back from the country Page
//  it's already selected? When to reset the selected country? Any recommended approach?

export const CountryList = (props: CountryListProps) => {
  const { countries, onCountryChanged } = props;

  const dispatch = useAppDispatch();

  const renderCountries = (): ReactNode => {
    return countries?.map((country: Country) => (
        <MenuItem value={country.iso2}>
          {country.country}
        </MenuItem>
    ))
  }

  const handleChange = (event: SelectChangeEvent) => {
      onCountryChanged(event.target.value as string);

      const selectedIso2 = event.target.value as string;
      dispatch(countrySelected(selectedIso2));
  };

  return (
      <div>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Countries</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Countries"
                  onChange={handleChange}
              >
                  {renderCountries()}
              </Select>
          </FormControl>
      </div>
)}
