import { useQuery } from "react-query";
import fetchCommune from "services/fetchCommune";
import type { Commune } from "src/models/commune/commune.interface";

export default (codeInsee: string) =>
    useQuery<Commune>(
        ["fetchCommune", codeInsee],
        async () => fetchCommune(codeInsee),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },

            retry: 1,
        }
    );