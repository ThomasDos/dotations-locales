import axios from "axios";
import { AutocompletionEPCI } from "models/autocompletion/epci/autocompletion.epci.interface";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<AutocompletionEPCI[]> =>
    axios
        .get(
            `${process.env.NEXT_PUBLIC_TERRITOIRES_API_URL}/epci/autocomplete?q=${search}`,
            { signal }
        )
        .then(
            ({
                data: { suggestions },
            }: {
                data: { suggestions: AutocompletionEPCI[] };
            }) => suggestions.slice(0, 5)
        );
