import { createSelector, createSlice } from "@reduxjs/toolkit";

import type { RootState } from ".";

interface AppSettings {
    isSimulation: boolean;
}

const initialState: AppSettings = {
    isSimulation: false,
};

const appSettingsSlice = createSlice({
    initialState,
    name: "appSettings",
    reducers: {
        updateIsSimulationFalse: state => {
            state.isSimulation = false;
        },
        updateIsSimulationTrue: state => {
            state.isSimulation = true;
        },
    },
});

export const { updateIsSimulationFalse, updateIsSimulationTrue } =
    appSettingsSlice.actions;

const selectSelf = (state: RootState) => state[appSettingsSlice.name];

export const selectSimulationCommune = createSelector(
    selectSelf,
    state => state
);
export const selectIsSimulation = createSelector(
    selectSelf,
    state => state.isSimulation
);

export default appSettingsSlice.reducer;
