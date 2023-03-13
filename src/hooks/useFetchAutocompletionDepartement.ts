import { AutocompletionDepartement } from "models/autocompletion/departement/autocompletion.departement.interface";
import { useQuery } from "react-query";
import fetchAutocompletionDepartement from "services/fetchAutocompletionDepartement";

export default (search: string) =>
    useQuery<AutocompletionDepartement[]>(
        ["searchAutocompletionDepartement", search],
        async ({ signal }) => fetchAutocompletionDepartement(search, signal),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },
        }
    );
