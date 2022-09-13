import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type {
    Commune,
    CommuneAnnee,
    Criteres,
} from "models/commune/commune.interface";
import {
    selectInitialAnnees,
    selectInitialCriteresGeneraux,
} from "store/initialCommune.slice";

import type { RootState } from ".";
import { selectIsSimulation } from "./appSettings.slice";

const initialState: Commune = {
    annees: [],
    codeInsee: "",
    criteresGeneraux: {},
    dotations: {},
};

const simulationCommuneSlice = createSlice({
    initialState,
    name: "simulationCommune",
    reducers: {
        hydrateSimulationCommune: (_, { payload }: PayloadAction<Commune>) =>
            payload,
        resetSimulationCommune: () => initialState,
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
    },
});

export const {
    hydrateSimulationCommune,
    updateSimulationCritereValeur,
    resetSimulationCommune,
} = simulationCommuneSlice.actions;

const selectSelf = (state: RootState) => state[simulationCommuneSlice.name];

export const selectSimulationCommune = createSelector(
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

export const selectSimulationIsDifferentThanInitial = createSelector(
    selectSimulationCriteresGeneraux,
    selectInitialCriteresGeneraux,
    selectSimulationAnnees,
    selectInitialAnnees,
    (
        simulationCriteresGeneraux: Criteres,
        initialCriteresGeneraux: Criteres,
        simulationAnnees: CommuneAnnee,
        initialAnnees: CommuneAnnee
    ): boolean => {
        const criteresGenerauxKeys = Object.keys(simulationCriteresGeneraux);

        return !!criteresGenerauxKeys.find((initialCritereKey: string) => {
            const initialCurrentYear =
                initialCriteresGeneraux[initialCritereKey].annees[0][
                    initialAnnees[0]
                ];
            const simulationCurrentYear =
                simulationCriteresGeneraux[initialCritereKey].annees[0][
                    simulationAnnees[0]
                ];

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

export default simulationCommuneSlice.reducer;
