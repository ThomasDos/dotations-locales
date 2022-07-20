import axios from "axios";
import type {
    IFetchEntityResult,
    IFetchEntityResultDto,
} from "src/models/entity/entity.interface";
import { fetchEntityResultSerializer } from "src/models/entity/entity.serializer";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<IFetchEntityResult> =>
    axios
        .get(
            `https://territoires.leximpact.dev/communes/autocomplete?field=commune&field=distributions_postales&q=${search}`,
            { signal }
        )
        .then((res: { data: IFetchEntityResultDto }) => {
            return fetchEntityResultSerializer(res.data);
        });
