import { useQuery } from "@tanstack/react-query";
import type { AutocompletionCommune } from "models/autocompletion/commune/autocompletion.commune.interface";
import fetchAutocompletionCommune from "services/fetchAutocompletionCommune";

export default (search: string) =>
    useQuery<AutocompletionCommune[]>(
        ["searchAutocompletion", search],
        async ({ signal }) => fetchAutocompletionCommune(search, signal)
    );
