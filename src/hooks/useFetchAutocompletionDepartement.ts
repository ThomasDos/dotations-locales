import { useQuery } from "@tanstack/react-query";
import { AutocompletionDepartement } from "models/autocompletion/departement/autocompletion.departement.interface";
import fetchAutocompletionDepartement from "services/fetchAutocompletionDepartement";

export default (search: string) =>
    useQuery<AutocompletionDepartement[]>(
        ["searchAutocompletionDepartement", search],
        async ({ signal }) => fetchAutocompletionDepartement(search, signal)
    );
