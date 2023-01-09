import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import postSimulation from "services/postSimulation";
import type { Commune } from "src/models/commune/commune.interface";
import { hydrateSimulationCommune } from "store/simulationCommune.slice";

export default (codeInsee: string) => {
    const dispatch = useDispatch();

    return useMutation(
        ["postSimulation", codeInsee],
        async ({
            simulationCommune,
            selectLoiSimulation,
        }: {
            simulationCommune: Commune;
            selectLoiSimulation: string;
        }) => postSimulation(simulationCommune, selectLoiSimulation),
        {
            onSuccess: data => {
                dispatch(hydrateSimulationCommune(data));
            },
        }
    );
};
