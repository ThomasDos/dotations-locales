import { createSelector, createSlice } from "@reduxjs/toolkit";

import type { RootState } from ".";

interface AppSettings {
    isSimulation: boolean;
    isEPCI: boolean;
    isCommune: boolean;
}

const initialState: AppSettings = {
    isSimulation: false,
    isEPCI: false,
    isCommune: false,
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
        updateIsEPCIFalse: state => {
            state.isEPCI = false;
        },
        updateIsEPCITrue: state => {
            state.isEPCI = true;
            state.isCommune = false;
        },
        updateIsCommuneFalse: state => {
            state.isCommune = false;
        },
        updateIsCommuneTrue: state => {
            state.isCommune = true;
            state.isEPCI = false;
        },
    },
});

export const {
    updateIsSimulationFalse,
    updateIsSimulationTrue,
    updateIsEPCIFalse,
    updateIsEPCITrue,
    updateIsCommuneFalse,
    updateIsCommuneTrue,
} = appSettingsSlice.actions;

const selectSelf = (state: RootState) => state[appSettingsSlice.name];

export const selectSimulationEntity = createSelector(
    selectSelf,
    state => state
);
export const selectIsSimulation = createSelector(
    selectSelf,
    state => state.isSimulation
);
export const selectIsEPCI = createSelector(selectSelf, state => state.isEPCI);

export const selectIsCommune = createSelector(
    selectSelf,
    state => state.isCommune
);

export default appSettingsSlice.reducer;
