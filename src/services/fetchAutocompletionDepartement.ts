import axios from "axios";
import { AutocompletionDepartement } from "models/autocompletion/departement/autocompletion.departement.interface";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<AutocompletionDepartement[]> =>
    axios
        .get(
            `${process.env.NEXT_PUBLIC_TERRITOIRES_API_URL}/departements/autocomplete?q=${search}`,
            { signal }
        )
        .then(
            ({
                data: { suggestions },
            }: {
                data: { suggestions: AutocompletionDepartement[] };
            }) => suggestions
        );
