import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Criteres, Entity, EntityAnnee } from "models/entity/entity.interface";

import { EntitySimulation } from "models/simulation/simulation.interface";
import {
    selectInitialAnnees,
    selectInitialAnneesCriteres,
    selectInitialCriteresGeneraux,
} from "store/initialEntity.slice";

import type { RootState } from ".";
import { selectIsSimulation } from "./appSettings.slice";

const initialState: EntitySimulation = {
    annees: [],
    anneesCriteres: [],
    code: "",
    criteresGeneraux: {},
    dotations: {},
    avertissementPrecisionSimulation: false,
};

const simulationEntitySlice = createSlice({
    initialState,
    name: "simulationEntity",
    reducers: {
        hydrateSimulationEntity: (
            _,
            { payload }: PayloadAction<Entity | EntitySimulation>
        ) => payload,
        resetSimulationEntity: () => initialState,
        updateSimulationCritereValeur: (
            state,
            {
                payload: { critereGeneralKey, valeur },
            }: PayloadAction<{ critereGeneralKey: string; valeur: number }>
        ) => {
            const currentYear = state.annees[0];
            state.criteresGeneraux[critereGeneralKey].annees[0][
                currentYear
            ].valeur = valeur;
        },
        updateSimulationCriteresGeneraux: (
            state,
            {
                payload: { criteresGeneraux },
            }: PayloadAction<{ criteresGeneraux: Criteres }>
        ) => {
            state.criteresGeneraux = criteresGeneraux;
        },
    },
});

export const {
    hydrateSimulationEntity,
    updateSimulationCritereValeur,
    resetSimulationEntity,
    updateSimulationCriteresGeneraux,
} = simulationEntitySlice.actions;

const selectSelf = (state: RootState) => state[simulationEntitySlice.name];

export const selectSimulationEntity = createSelector(
    selectSelf,
    state => state
);
export const selectSimulationCriteresGeneraux = createSelector(
    selectSelf,
    state => state.criteresGeneraux
);
export const selectSimulationDotations = createSelector(
    selectSelf,
    state => state.dotations
);

export const selectSimulationAnnees = createSelector(
    selectSelf,
    state => state.annees
);

export const selectSimulationAnneesCriteres = createSelector(
    selectSelf,
    state => state.anneesCriteres
);

export const selectSimulationAvertissementPrecisionSimulation = createSelector(
    selectSelf,
    state => state.avertissementPrecisionSimulation
);

export const selectSimulationIsDifferentThanInitial = createSelector(
    selectSimulationCriteresGeneraux,
    selectInitialCriteresGeneraux,
    selectSimulationAnneesCriteres,
    selectInitialAnneesCriteres,
    (
        simulationCriteresGeneraux: Criteres,
        initialCriteresGeneraux: Criteres,
        simulationAnneesCriteres: EntityAnnee,
        initialAnneesCriteres: EntityAnnee
    ): boolean => {
        const criteresGenerauxKeys = Object.keys(simulationCriteresGeneraux);

        return !!criteresGenerauxKeys.find((critereKey: string) => {
            const initialCurrentYear =
                initialCriteresGeneraux[critereKey].annees[0]?.[
                    initialAnneesCriteres?.[0]
                ];
            const simulationCurrentYear =
                simulationCriteresGeneraux[critereKey].annees[0]?.[
                    simulationAnneesCriteres?.[0]
                ];

            if (!initialCurrentYear || !simulationCurrentYear) return false;

            return initialCurrentYear.valeur != simulationCurrentYear.valeur;
        });
    }
);

export const selectCurrentYear = createSelector(
    selectIsSimulation,
    selectSimulationAnnees,
    selectInitialAnnees,
    (isSimulation, simulationAnnees, initialAnnees) =>
        isSimulation ? simulationAnnees[0] : initialAnnees[0]
);
export const selectLastYear = createSelector(
    selectIsSimulation,
    selectSimulationAnnees,
    selectInitialAnnees,
    (isSimulation, simulationAnnees, initialAnnees) =>
        isSimulation ? simulationAnnees[1] : initialAnnees[1]
);

export const selectAllYears = createSelector(
    selectIsSimulation,
    selectSimulationAnnees,
    selectInitialAnnees,
    (isSimulation, simulationAnnees, initialAnnees) =>
        isSimulation ? simulationAnnees : initialAnnees
);

export const selectCurrentYearCriteres = createSelector(
    selectIsSimulation,
    selectSimulationAnneesCriteres,
    selectInitialAnneesCriteres,
    (isSimulation, simulationAnneesCriteres, initialAnneesCriteres) =>
        isSimulation ? simulationAnneesCriteres[0] : initialAnneesCriteres[0]
);

export const selectLastYearCriteres = createSelector(
    selectIsSimulation,
    selectSimulationAnneesCriteres,
    selectInitialAnneesCriteres,
    (isSimulation, simulationAnneesCriteres, initialAnneesCriteres) =>
        isSimulation ? simulationAnneesCriteres[1] : initialAnneesCriteres[1]
);

export const selectAllYearsCriteres = createSelector(
    selectIsSimulation,
    selectSimulationAnneesCriteres,
    selectInitialAnneesCriteres,
    (isSimulation, simulationAnneesCriteres, initialAnneesCriteres) =>
        isSimulation ? simulationAnneesCriteres : initialAnneesCriteres
);

export default simulationEntitySlice.reducer;
