import type { Commune } from "models/commune/commune.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateIsSimulationFalse } from "store/appSettings.slice";
import {
    hydrateInitialCommune,
    resetInitialCommune,
} from "store/initialCommune.slice";
import {
    hydrateSimulationCommune,
    resetSimulationCommune,
} from "store/simulationCommune.slice";

export default (fetchCommuneData: Commune | undefined) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!fetchCommuneData) return;

        dispatch(hydrateInitialCommune(fetchCommuneData));
        dispatch(hydrateSimulationCommune(fetchCommuneData));
        return () => {
            dispatch(resetSimulationCommune());
            dispatch(resetInitialCommune());
            dispatch(updateIsSimulationFalse());
        };
    }, [fetchCommuneData, dispatch]);
};
