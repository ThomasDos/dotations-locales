import { useQuery } from "react-query";
import fetchEntity from "services/fetchEntity";
import type { IFetchEntityResult } from "src/models/entity/entity.interface";

export default (search: string) =>
    useQuery<IFetchEntityResult>(
        ["searchEntity", search],
        async ({ signal }) => fetchEntity(search, signal),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },

            retry: 1,
        }
    );
