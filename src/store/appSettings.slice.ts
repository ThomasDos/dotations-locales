import { createSelector, createSlice } from "@reduxjs/toolkit";
import stringToBoolean from "utils/stringToBoolean";

import { InitData } from "models/init/init.interface";
import type { RootState } from ".";
import { selectInitialCriteresGenerauxIsEmpty } from "./initialEntity.slice";

interface AppSettings {
    isSimulation: boolean;
    isEPCI: boolean;
    isCommune: boolean;
    isDepartement: boolean;
    features: {
        simulation: boolean;
        comparer: boolean;
    };
    init: InitData | null;
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
    init: null,
};

const appSettingsSlice = createSlice({
    initialState,
    name: "appSettings",
    reducers: {
        resetAppSettings: state => ({
            ...initialState,
            init: state.init,
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
        hydrateInit: (state, action) => {
            state.init = action.payload;
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
    hydrateInit,
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

export const selectInit = createSelector(selectSelf, state => state.init);

export const selectSourcesDonnees = createSelector(
    selectInit,
    init => init?.sourcesDonnees
);
export const selectBaseCalcul = createSelector(
    selectInit,
    init => init?.baseCalcul
);

export const selectSimulationPeriodes = createSelector(
    selectInit,
    init => init?.simulationPeriodes
);
export const selectDerniereMajDonneess = createSelector(
    selectInit,
    init => init?.derniereMajDonnees
);

export const selectSimulationIsEnabled = createSelector(
    selectFeaturesSimulation,
    selectIsCommune,
    selectInitialCriteresGenerauxIsEmpty,
    selectSimulationPeriodes,
    (
        featuresSimulation,
        isCommune,
        initialCriteresGenerauxIsEmpty,
        simulationPeriodes
    ) =>
        isCommune &&
        featuresSimulation &&
        !initialCriteresGenerauxIsEmpty &&
        simulationPeriodes?.length
);

export const selectFichiersWithEntity = createSelector(
    selectSourcesDonnees,
    selectIsCommune,
    selectIsDepartement,
    selectIsEPCI,
    (sourcesDonnees, isCommune, isDepartement, isEPCI) => {
        if (!sourcesDonnees) return null;

        const { commune, departement, epci } = sourcesDonnees;

        if (isCommune) return commune;
        if (isDepartement) return departement;
        if (isEPCI) return epci;

        return null;
    }
);

export const selectFichiersWithEntityAndDotation = (dotation: string) =>
    createSelector(selectFichiersWithEntity, fichiersWithEntity => {
        if (!fichiersWithEntity?.[dotation]) return null;
        return fichiersWithEntity[dotation].fichiers;
    });

export default appSettingsSlice.reducer;
