import axios from "axios";
import type { IFetchEntityResult } from "interfaces/entity.interface";

export default async (
    search: string,
    signal: AbortSignal | undefined
): Promise<IFetchEntityResult> =>
    axios
        .get(
            `https://territoires.leximpact.dev/communes/autocomplete?field=commune&field=distributions_postales&q=${search}`,
            { signal }
        )
        .then(res => {
            return res.data;
        });
