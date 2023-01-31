import { useQuery } from "react-query";
import fetchAutocompletionEPCI from "services/fetchAutocompletionEPCI";
import type { Autocompletion } from "src/models/autocompletion/autocompletion.interface";

export default (search: string) =>
    useQuery<Autocompletion[]>(
        ["searchAutocompletionEPCI", search],
        async ({ signal }) => fetchAutocompletionEPCI(search, signal),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },
        }
    );
