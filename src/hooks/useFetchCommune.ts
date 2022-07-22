import { useQuery } from "react-query";
import fetchCommune from "services/fetchCommune";

export default (codeInsee: string) =>
    useQuery(["fetchCommune", codeInsee], async () => fetchCommune(codeInsee), {
        onError: err => {
            //TODO: manage error
            return err;
        },

        retry: 1,
    });
