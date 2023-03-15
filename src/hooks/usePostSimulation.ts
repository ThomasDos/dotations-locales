import { useMutation } from "@tanstack/react-query";
import { Entity } from "models/entity/entity.interface";
import { useDispatch } from "react-redux";
import postSimulation from "services/postSimulation";
import { hydrateSimulationEntity } from "store/simulationEntity.slice";

export default (code: string) => {
    const dispatch = useDispatch();

    return useMutation(
        ["postSimulation", code],
        async ({
            simulationEntity,
            selectLoiSimulation,
        }: {
            simulationEntity: Entity;
            selectLoiSimulation: string;
        }) => postSimulation(simulationEntity, selectLoiSimulation),
        {
            onSuccess: data => {
                dispatch(hydrateSimulationEntity(data));
            },
        }
    );
};
