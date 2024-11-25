import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
    iso2: string;
}

const initialState: CountryState = {
    iso2: '',
};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        countrySelected(state, action: PayloadAction<string>) {
            state.iso2 = action.payload;
        },
    },
});

export const { countrySelected } = countrySlice.actions;
export default countrySlice.reducer;
