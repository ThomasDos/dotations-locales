import { postSimulationDeserializer } from "models/simulation/simulation.deserializer";
import type { Commune, CommuneDto } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";

import apiDotations from "./apiDotations";

export default async (simulationCommune: Commune): Promise<Commune> => {
    const simulationDeserialized =
        postSimulationDeserializer(simulationCommune);

    return apiDotations
        .post("/simulation/", simulationDeserialized)
        .then(({ data }: { data: CommuneDto }) => {
            return fetchCommuneSerializer(data);
        });
};
