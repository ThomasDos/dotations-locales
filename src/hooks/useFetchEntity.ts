import type { IFetchEntityResult } from "interfaces/entity.interface";
import { useQuery } from "react-query";
import fetchEntity from "services/fetchEntity";

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
