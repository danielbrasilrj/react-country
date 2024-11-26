import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
    iso2?: string;
}

const initialState: CountryState = {
    iso2: undefined,
};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        countrySelected(state, action: PayloadAction<string>) {
            state.iso2 = action.payload;
        },
        resetState(state) {
            state.iso2 = undefined;
        }
    },
});

export const { countrySelected, resetState } = countrySlice.actions;
export default countrySlice.reducer;
