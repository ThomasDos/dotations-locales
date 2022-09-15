import axios from "axios";
import type {
    Autocompletion,
    AutocompletionDto,
} from "src/models/autocompletion/autocompletion.interface";
import { fetchAutocompletionSerializer } from "src/models/autocompletion/autocompletion.serializer";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<Autocompletion[]> =>
    axios
        .get(
            `${process.env.NEXT_PUBLIC_TERRITOIRES_API_URL}/communes/autocomplete?field=commune&field=distributions_postales&q=${search}`,
            { signal }
        )
        .then(
            ({
                data: { suggestions },
            }: {
                data: { suggestions: AutocompletionDto[] };
            }) => {
                return fetchAutocompletionSerializer(suggestions);
            }
        );
