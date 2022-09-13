import axios from "axios";
import { postSimulationDeserializer } from "models/simulation/simulation.deserializer";
import type { Commune, CommuneDto } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";

export default async (simulationCommune: Commune): Promise<Commune> => {
    const simulationDeserialized =
        postSimulationDeserializer(simulationCommune);
    //TODO: changer url pour endpoint
    return axios
        .post(
            "https://dotations-locales-back-pr18.osc-fr1.scalingo.io/simulation/",
            simulationDeserialized
        )
        .then(({ data }: { data: CommuneDto }) => {
            return fetchCommuneSerializer(data);
        });
};
