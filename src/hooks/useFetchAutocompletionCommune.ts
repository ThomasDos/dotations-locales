import type { AutocompletionCommune } from "models/autocompletion/commune/autocompletion.commune.interface";
import { useQuery } from "react-query";
import fetchAutocompletionCommune from "services/fetchAutocompletionCommune";

export default (search: string) =>
    useQuery<AutocompletionCommune[]>(
        ["searchAutocompletion", search],
        async ({ signal }) => fetchAutocompletionCommune(search, signal),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },
        }
    );
