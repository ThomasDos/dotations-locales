import { postSimulationDeserializer } from "models/simulation/simulation.deserializer";
import {
    CommuneSimulation,
    CommuneSimulationDto,
} from "models/simulation/simulation.interface";
import { fetchCommuneSerializerSimulation } from "models/simulation/simulation.serializer";
import type { Commune } from "src/models/commune/commune.interface";

import apiDotations from "./apiDotations";

export default async (
    simulationCommune: Commune
): Promise<CommuneSimulation> => {
    const simulationDeserialized =
        postSimulationDeserializer(simulationCommune);

    return apiDotations
        .post("/simulation/", simulationDeserialized)
        .then(({ data }: { data: CommuneSimulationDto }) => {
            return fetchCommuneSerializerSimulation(data);
        });
};
