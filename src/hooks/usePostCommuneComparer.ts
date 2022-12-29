import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import postCommuneComparer from "services/postCommuneComparer";
import { addCommune } from "store/communesComparer.slice";

export interface UsePostCommuneComparerProps {
    codeInsee: string;
    commune: string;
}
const usePostCommuneComparer = () => {
    const dispatch = useDispatch();

    return useMutation(
        ["postCommuneComparer"],
        async ({ codeInsee, commune }: UsePostCommuneComparerProps) =>
            postCommuneComparer(codeInsee, commune),
        {
            onSuccess: communeComparer => {
                dispatch(addCommune(communeComparer));
            },
        }
    );
};

export default usePostCommuneComparer;
