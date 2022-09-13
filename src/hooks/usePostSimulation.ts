import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import postSimulation from "services/postSimulation";
import type { Commune } from "src/models/commune/commune.interface";
import { hydrateSimulationCommune } from "store/simulationCommune.slice";

export default (codeInsee: string) => {
    const dispatch = useDispatch();

    return useMutation(
        ["postSimulation", codeInsee],
        async (simulationCommune: Commune) => postSimulation(simulationCommune),
        {
            onSuccess: data => {
                dispatch(hydrateSimulationCommune(data));
            },
            retry: 1,
        }
    );
};
