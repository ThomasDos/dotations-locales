import { useQuery } from "@tanstack/react-query";
import { AutocompletionEPCI } from "models/autocompletion/epci/autocompletion.epci.interface";
import fetchAutocompletionEPCI from "services/fetchAutocompletionEPCI";

export default (search: string) =>
    useQuery<AutocompletionEPCI[]>(
        ["searchAutocompletionEPCI", search],
        async ({ signal }) => fetchAutocompletionEPCI(search, signal),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },
        }
    );
