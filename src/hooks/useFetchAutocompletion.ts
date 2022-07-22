import { useQuery } from "react-query";
import fetchAutocompletion from "services/fetchAutocompletion";
import type { IAutocompletion } from "src/models/autocompletion/autocompletion.interface";

export default (search: string) =>
    useQuery<IAutocompletion[]>(
        ["searchAutocompletion", search],
        async ({ signal }) => fetchAutocompletion(search, signal),
        {
            onError: err => {
                //TODO: manage error
                return err;
            },

            retry: 1,
        }
    );
