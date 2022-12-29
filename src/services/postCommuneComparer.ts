import { fetchCommuneSerializer } from "models/commune/commune.serializer";
import type { CommuneDto } from "src/models/commune/commune.interface";
import { CommuneComparer } from "store/communesComparer.slice";

import apiDotations from "./apiDotations";

export default async (
    codeInsee: string,
    commune: string
): Promise<CommuneComparer> =>
    apiDotations
        .post(`/commune/`, {
            code_insee: codeInsee,
        })
        .then(({ data }: { data: CommuneDto }) => {
            return { ...fetchCommuneSerializer(data), commune };
        });
