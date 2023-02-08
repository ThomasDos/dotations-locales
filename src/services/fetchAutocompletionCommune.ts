import axios from "axios";
import type {
    AutocompletionCommune,
    AutocompletionCommuneDto,
} from "models/autocompletion/commune/autocompletion.commune.interface";
import { fetchAutocompletionSerializer } from "models/autocompletion/commune/autocompletion.commune.serializer";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<AutocompletionCommune[]> =>
    axios
        .get(
            `${process.env.NEXT_PUBLIC_TERRITOIRES_API_URL}/communes/autocomplete?field=commune&field=distributions_postales&q=${search}`,
            { signal }
        )
        .then(
            ({
                data: { suggestions },
            }: {
                data: { suggestions: AutocompletionCommuneDto[] };
            }) => fetchAutocompletionSerializer(suggestions)
        );
