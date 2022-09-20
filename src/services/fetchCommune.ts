import type { Commune, CommuneDto } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";

import apiDotations from "./apiDotations";

export default async (codeInsee: string): Promise<Commune> =>
    apiDotations
        .post(`/commune/`, {
            code_insee: codeInsee,
        })
        .then(({ data }: { data: CommuneDto }) => {
            return fetchCommuneSerializer(data);
        });
