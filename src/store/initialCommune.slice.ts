import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Commune, Dotations } from "models/commune/commune.interface";
import getTotalDotations from "utils/getTotalDotations";

import type { RootState } from ".";

const initialState: Commune = {
    codeInsee: "",
    criteresGeneraux: {},
    dotations: {},
};

const initialCommuneSlice = createSlice({
    initialState,
    name: "initialCommune",
    reducers: {
        hydrateInitialCommune: (_, { payload }: PayloadAction<Commune>) =>
            payload,
        resetInitialCommune: () => initialState,
    },
});

export const { hydrateInitialCommune, resetInitialCommune } =
    initialCommuneSlice.actions;

const selectSelf = (state: RootState) => state[initialCommuneSlice.name];

export const selectInitialCommune = createSelector(selectSelf, state => state);

export const selectInitialCriteresGeneraux = createSelector(
    selectSelf,
    state => state.criteresGeneraux
);
export const selectInitialDotations = createSelector(
    selectSelf,
    state => state.dotations
);

export const selectInitialCodeInsee = createSelector(
    selectSelf,
    state => state.codeInsee
);

export const selectCurrentYearTotal = createSelector(
    selectInitialDotations,
    (dotations: Dotations) => {
        const currentYear = new Date().getFullYear();
        return getTotalDotations(dotations, String(currentYear));
    }
);
export const selectLastYearTotal = createSelector(
    selectInitialDotations,
    (dotations: Dotations) => {
        const lastYear = new Date().getFullYear() - 1;
        return getTotalDotations(dotations, String(lastYear));
    }
);

export default initialCommuneSlice.reducer;
