import type { Entity } from "models/entity/entity.interface";
import { postSimulationDeserializer } from "models/simulation/simulation.deserializer";
import {
    EntitySimulation,
    EntitySimulationDto,
} from "models/simulation/simulation.interface";
import { fetchEntitySerializerSimulation } from "models/simulation/simulation.serializer";

import apiDotations from "./apiDotations";

export default async (
    simulationEntity: Entity,
    selectLoiSimulation: string
): Promise<EntitySimulation> => {
    const simulationDeserialized = postSimulationDeserializer(
        simulationEntity,
        selectLoiSimulation
    );

    return apiDotations
        .post("/simulation/", simulationDeserialized)
        .then(({ data }: { data: EntitySimulationDto }) => {
            return fetchEntitySerializerSimulation(data);
        });
};
