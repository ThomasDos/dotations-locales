import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Dotations, Entity, EntityAnnee } from "models/entity/entity.interface";

import getTotalDotations from "utils/getTotalDotations";

import type { RootState } from ".";

const initialState: Entity = {
    annees: [],
    code: "",
    criteresGeneraux: {},
    dotations: {},
};

const initialEntitySlice = createSlice({
    initialState,
    name: "initialEntity",
    reducers: {
        hydrateInitialEntity: (_, { payload }: PayloadAction<Entity>) =>
            payload,
        resetInitialEntity: () => initialState,
    },
});

export const { hydrateInitialEntity, resetInitialEntity } =
    initialEntitySlice.actions;

const selectSelf = (state: RootState) => state[initialEntitySlice.name];

export const selectInitialEntity = createSelector(selectSelf, state => state);

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

export const selectInitialCode = createSelector(
    selectSelf,
    state => state.code
);

export const selectCurrentYearTotal = createSelector(
    selectInitialDotations,
    selectInitialAnnees,
    (dotations: Dotations, annees: EntityAnnee) => {
        const currentYear = annees[0];
        return getTotalDotations(dotations, String(currentYear));
    }
);
export const selectLastYearTotal = createSelector(
    selectInitialDotations,
    selectInitialAnnees,
    (dotations: Dotations, annees: EntityAnnee) => {
        const lastYear = annees[1];
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

export default initialEntitySlice.reducer;
