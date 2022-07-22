import axios from "axios";
import type {
    IAutocompletion,
    IAutocompletionDto,
} from "src/models/autocompletion/autocompletion.interface";
import { fetchAutocompletionSerializer } from "src/models/autocompletion/autocompletion.serializer";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<IAutocompletion[]> =>
    axios
        .get(
            `https://territoires.leximpact.dev/communes/autocomplete?field=commune&field=distributions_postales&q=${search}`,
            { signal }
        )
        .then((res: { data: IAutocompletionDto[] }) => {
            return fetchAutocompletionSerializer(res.data);
        });
