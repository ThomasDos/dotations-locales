import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Commune, Criteres } from "models/commune/commune.interface";
import { selectInitialCriteres } from "store/initialCommune/initialCommune.slice";

import type { RootState } from "..";

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
        updateCritereValeur: (
            state,
            {
                payload: { critereKey, value },
            }: PayloadAction<{ critereKey: string; value: string }>
        ) => {
            state.criteres[critereKey].annees[0][
                new Date().getFullYear()
            ].valeur = value;
        },
    },
});

export const { hydrateSimulationCommune, updateCritereValeur } =
    simulationCommuneSlice.actions;

const selectSelf = (state: RootState) => state[simulationCommuneSlice.name];

export const selectSimulationCommune = createSelector(
    selectSelf,
    state => state
);
const selectCriteres = createSelector(selectSelf, state => state.criteres);

export const selectSimulationIsDifferentThanInitial = createSelector(
    selectCriteres,
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
