import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Commune } from "models/commune/commune.interface";

import type { RootState } from "..";

const initialState: Commune = {
    codeInsee: "",
    criteres: {},
    dotations: {},
};

const initialCommuneSlice = createSlice({
    initialState,
    name: "initialCommune",
    reducers: {
        hydrateInitialCommune: (_, { payload }: PayloadAction<Commune>) =>
            payload,
    },
});

export const { hydrateInitialCommune } = initialCommuneSlice.actions;

const selectSelf = (state: RootState) => state[initialCommuneSlice.name];

export const selectInitialCommune = createSelector(selectSelf, state => state);

export const selectInitialCriteres = createSelector(
    selectSelf,
    state => state.criteres
);
export const selectInitialDotations = createSelector(
    selectSelf,
    state => state.dotations
);

export default initialCommuneSlice.reducer;
