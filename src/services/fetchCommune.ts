import axios from "axios";
import type { Commune, CommuneDto } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";

export default async (codeInsee: string): Promise<Commune> =>
    axios
        .post("https://dotations-locales-back.osc-fr1.scalingo.io/commune/", {
            code_insee: codeInsee,
        })
        .then(({ data }: { data: CommuneDto }) => {
            return fetchCommuneSerializer(data);
        });
