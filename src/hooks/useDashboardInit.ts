import type { Commune } from "models/commune/commune.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateInitialCommune } from "store/initialCommune.slice";
import { hydrateSimulationCommune } from "store/simulationCommune.slice";

export default (fetchCommuneData: Commune | undefined) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!fetchCommuneData) return;
        dispatch(hydrateInitialCommune(fetchCommuneData));

        dispatch(hydrateSimulationCommune(fetchCommuneData));
    }, [fetchCommuneData, dispatch]);
};
