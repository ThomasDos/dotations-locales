import axios from "axios";
import type { Commune, CommuneDto } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (codeInsee: string): Promise<Commune> =>
    axios
        .post("https://dotations-locales-back.osc-fr1.scalingo.io/commune/", {
            code_insee: codeInsee,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then(({ data }: { data: CommuneDto }) => {
            console.log("res", data);
            return fetchCommuneSerializer(data);
        });
