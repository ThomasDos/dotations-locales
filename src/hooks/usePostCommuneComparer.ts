import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import postCommuneComparer from "services/postCommuneComparer";
import { addEntity } from "store/entitiesComparer.slice";

export interface UsePostEntityComparerProps {
    code: string;
    libelle: string;
}
const usePostCommuneComparer = () => {
    const dispatch = useDispatch();

    return useMutation(
        ["postCommuneComparer"],
        async ({ code, libelle }: UsePostEntityComparerProps) =>
            postCommuneComparer(code, libelle),
        {
            onSuccess: communeComparer => {
                dispatch(addEntity(communeComparer));
            },
        }
    );
};

export default usePostCommuneComparer;
