import axios from "axios";
import type { Commune, CommuneDto } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";
import formatCodeInseeMetropole from "utils/formatCodeInseeMetropole";

export default async (codeInsee: string): Promise<Commune> => {
    const codeInseeFormatted = formatCodeInseeMetropole(codeInsee);

    return axios
        .post("https://dotations-locales-back.osc-fr1.scalingo.io/commune/", {
            code_insee: codeInseeFormatted,
        })
        .then(({ data }: { data: CommuneDto }) => {
            return fetchCommuneSerializer(data);
        });
};
