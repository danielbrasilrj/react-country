import React, {ReactNode} from "react";
import {Country} from "../data/Types";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import { incremented, amountAdded } from "../features/counter/counterSlice";

export type CountryListProps = {
  countries: Country[] | undefined;
  onCountryChanged: (iso2: string) => void;
}

export const CountryList = (props: CountryListProps) => {
  const { countries, onCountryChanged } = props;

  const count = useAppSelector( (state) => state.counter.value);
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
      dispatch(incremented());
      // dispatch(amountAdded(3));
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
        <div style={{ padding: '20px' }}>
            <b>Country selection count: </b> {count}
        </div>
      </div>
)}
