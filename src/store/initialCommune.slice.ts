import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type {
    Commune,
    CommuneAnnee,
    Dotations,
} from "models/commune/commune.interface";
import getTotalDotations from "utils/getTotalDotations";

import type { RootState } from ".";

const initialState: Commune = {
    annees: [],
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

export const selectInitialAnnees = createSelector(
    selectSelf,
    state => state.annees
);

export const selectInitialCodeInsee = createSelector(
    selectSelf,
    state => state.codeInsee
);

export const selectCurrentYearTotal = createSelector(
    selectInitialDotations,
    selectInitialAnnees,
    (dotations: Dotations, annees: CommuneAnnee) => {
        const currentYear = annees[0];
        return getTotalDotations(dotations, String(currentYear));
    }
);
export const selectLastYearTotal = createSelector(
    selectInitialDotations,
    selectInitialAnnees,
    (dotations: Dotations, annees: CommuneAnnee) => {
        const lastYear = annees[0];
        return getTotalDotations(dotations, String(lastYear));
    }
);

export const selectInitialCurrentYear = createSelector(
    selectInitialAnnees,
    initialAnnees => initialAnnees[0]
);

export const selectInitialLastYear = createSelector(
    selectInitialAnnees,
    initialAnnees => initialAnnees[1]
);

export default initialCommuneSlice.reducer;
