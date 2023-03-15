import { createSelector, createSlice } from "@reduxjs/toolkit";

import type { RootState } from ".";

interface AppSettings {
    isSimulation: boolean;
    isEPCI: boolean;
    isCommune: boolean;
    isDepartement: boolean;
}

const initialState: AppSettings = {
    isSimulation: false,
    isEPCI: false,
    isCommune: false,
    isDepartement: false,
};

const appSettingsSlice = createSlice({
    initialState,
    name: "appSettings",
    reducers: {
        resetAppSettings: () => initialState,
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
            state.isDepartement = false;
        },
        updateIsCommuneFalse: state => {
            state.isCommune = false;
        },
        updateIsCommuneTrue: state => {
            state.isCommune = true;
            state.isEPCI = false;
            state.isDepartement = false;
        },
        updateIsDepartementFalse: state => {
            state.isDepartement = false;
        },
        updateIsDepartementTrue: state => {
            state.isDepartement = true;
            state.isEPCI = false;
            state.isCommune = false;
        },
    },
});

export const {
    resetAppSettings,
    updateIsSimulationFalse,
    updateIsSimulationTrue,
    updateIsEPCIFalse,
    updateIsEPCITrue,
    updateIsCommuneFalse,
    updateIsCommuneTrue,
    updateIsDepartementFalse,
    updateIsDepartementTrue,
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

export const selectIsDepartement = createSelector(
    selectSelf,
    state => state.isDepartement
);

export const selectEntityDenomination = createSelector(
    selectSelf,
    ({ isDepartement, isCommune, isEPCI }) => {
        switch (true) {
            case isCommune:
                return "commune";

            case isDepartement:
                return "département";

            case isEPCI:
                return "EPCI";

            default:
                return "entité";
        }
    }
);

export const selectEntitiesDenomination = createSelector(
    selectSelf,
    ({ isDepartement, isCommune, isEPCI }) => {
        switch (true) {
            case isCommune:
                return "communes";

            case isDepartement:
                return "départements";

            case isEPCI:
                return "EPCI";

            default:
                return "entités";
        }
    }
);

export default appSettingsSlice.reducer;
