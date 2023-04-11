import { createSelector, createSlice } from "@reduxjs/toolkit";
import stringToBoolean from "utils/stringToBoolean";

import { InitData } from "models/init/init.interface";
import type { RootState } from ".";

interface AppSettings {
    isSimulation: boolean;
    isEPCI: boolean;
    isCommune: boolean;
    isDepartement: boolean;
    features: {
        simulation: boolean;
        comparer: boolean;
    };
    fichiers: InitData | null;
}

const initialState: AppSettings = {
    isSimulation: false,
    isEPCI: false,
    isCommune: false,
    isDepartement: false,
    features: {
        simulation: stringToBoolean(
            process.env.NEXT_PUBLIC_FEATURES_SIMULATION
        ),
        comparer: stringToBoolean(process.env.NEXT_PUBLIC_FEATURES_COMPARER),
    },
    fichiers: null,
};

const appSettingsSlice = createSlice({
    initialState,
    name: "appSettings",
    reducers: {
        resetAppSettings: state => ({
            ...initialState,
            fichiers: state.fichiers,
        }),
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
        hydrateFichiers: (state, action) => {
            state.fichiers = action.payload;
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
    hydrateFichiers,
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

export const selectFeatures = createSelector(
    selectSelf,
    state => state.features
);

export const selectFeaturesComparer = createSelector(
    selectFeatures,
    state => state.comparer
);

export const selectFeaturesSimulation = createSelector(
    selectFeatures,
    state => state.simulation
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
                return "intercommunalité";

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
                return "intercommunalités";

            default:
                return "entités";
        }
    }
);

export const selectFichiers = createSelector(
    selectSelf,
    state => state.fichiers
);

export const selectFichiersWithEntity = createSelector(
    selectFichiers,
    selectIsCommune,
    selectIsDepartement,
    selectIsEPCI,
    (fichiers, isCommune, isDepartement, isEPCI) => {
        if (!fichiers) return null;

        const { commune, departement, epci } = fichiers;

        if (isCommune) return commune;
        if (isDepartement) return departement;
        if (isEPCI) return epci;

        return null;
    }
);

export const selectFichiersWithEntityAndDotation = (dotation: string) =>
    createSelector(selectFichiersWithEntity, fichiersWithEntity => {
        if (!fichiersWithEntity) return null;
        return fichiersWithEntity[dotation];
    });

export default appSettingsSlice.reducer;
