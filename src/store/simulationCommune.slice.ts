import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Commune, Criteres } from "models/commune/commune.interface";
import { selectInitialCriteres } from "store/initialCommune.slice";

import type { RootState } from ".";

const initialState: Commune = {
    codeInsee: "",
    criteres: {},
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
                payload: { critereKey, valeur },
            }: PayloadAction<{ critereKey: string; valeur: string }>
        ) => {
            state.criteres[critereKey].annees[0][
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
const selectSimulationCriteres = createSelector(
    selectSelf,
    state => state.criteres
);

export const selectSimulationIsDifferentThanInitial = createSelector(
    selectSimulationCriteres,
    selectInitialCriteres,
    (criteres: Criteres, initialCriteres: Criteres): boolean => {
        const criteresKeys = Object.keys(criteres);

        return !!criteresKeys.find((initialCritereKey: string) => {
            const initialCurrentYear =
                initialCriteres[initialCritereKey].annees[0][
                    new Date().getFullYear()
                ];
            const currentYear =
                criteres[initialCritereKey].annees[0][new Date().getFullYear()];

            return initialCurrentYear.valeur !== currentYear.valeur;
        });
    }
);

export default simulationCommuneSlice.reducer;
