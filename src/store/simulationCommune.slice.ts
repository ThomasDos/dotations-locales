import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Commune, Criteres } from "models/commune/commune.interface";
import { selectInitialCriteresGeneraux } from "store/initialCommune.slice";

import type { RootState } from ".";

const initialState: Commune = {
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
            state.criteresGeneraux[critereGeneralKey].annees[0][
                new Date().getFullYear()
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
const selectSimulationCriteresGeneraux = createSelector(
    selectSelf,
    state => state.criteresGeneraux
);

export const selectSimulationIsDifferentThanInitial = createSelector(
    selectSimulationCriteresGeneraux,
    selectInitialCriteresGeneraux,
    (
        simulationCriteresGeneraux: Criteres,
        initialCriteresGeneraux: Criteres
    ): boolean => {
        const criteresGenerauxKeys = Object.keys(simulationCriteresGeneraux);

        return !!criteresGenerauxKeys.find((initialCritereKey: string) => {
            const initialCurrentYear =
                initialCriteresGeneraux[initialCritereKey].annees[0][
                    new Date().getFullYear()
                ];
            const currentYear =
                simulationCriteresGeneraux[initialCritereKey].annees[0][
                    new Date().getFullYear()
                ];

            return initialCurrentYear.valeur !== currentYear.valeur;
        });
    }
);

export default simulationCommuneSlice.reducer;
