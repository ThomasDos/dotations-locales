import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Dotations, Entity, EntityAnnee } from "models/entity/entity.interface";

import getTotalDotations from "utils/getTotalDotations";

import type { RootState } from ".";

const initialState: Entity = {
    annees: [],
    anneesCriteres: [],
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

export const selectInitialAnneesCriteres = createSelector(
    selectSelf,
    state => state.anneesCriteres
);

export const selectInitialCode = createSelector(
    selectSelf,
    state => state.code
);

export const selectInitialPartDotationRrf = createSelector(
    selectSelf,
    state => state.partDotationRrf
);

export const selectCurrentYearInitialPartDotationRrf = createSelector(
    selectInitialPartDotationRrf,
    partDotationRrf => Object.keys(partDotationRrf?.annees[0] ?? [])[0]
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

export const selectInitialCurrentYearCriteres = createSelector(
    selectInitialAnneesCriteres,
    initialAnneesCriteres => initialAnneesCriteres[0]
);

export const selectInitialLastYear = createSelector(
    selectInitialAnnees,
    initialAnnees => initialAnnees[1]
);

export const selectInitialCriteresGenerauxIsEmpty = createSelector(
    selectInitialCriteresGeneraux,
    criteresGeneraux => {
        const hasNoCriteres = Object.keys(criteresGeneraux).length === 0;
        const criteresAreEmpty = Object.values(criteresGeneraux).every(
            critere => !critere.annees.length
        );
        return hasNoCriteres || criteresAreEmpty;
    }
);

export const selectIsDotationsAnneesDifferentThanCriteresAnnees =
    createSelector(
        selectInitialAnnees,
        selectInitialAnneesCriteres,
        (annees, anneesCriteres) => annees[0] !== anneesCriteres[0]
    );

export const selectIsDotationsAnneesDifferentThanDotationRrfAnnees =
    createSelector(
        selectInitialAnnees,
        selectCurrentYearInitialPartDotationRrf,
        (annees, currentYear) => annees[0] !== currentYear
    );

export default initialEntitySlice.reducer;
