import type { PayloadAction } from "@reduxjs/toolkit";
import {
    createEntityAdapter,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";
import type { Commune, Criteres } from "models/commune/commune.interface";

import type { RootState } from "..";

const criteresAdapter = createEntityAdapter();

const initialState: Commune = {
    codeInsee: "",
    criteres: criteresAdapter.getInitialState<Criteres>({}),
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

export default simulationCommuneSlice.reducer;
