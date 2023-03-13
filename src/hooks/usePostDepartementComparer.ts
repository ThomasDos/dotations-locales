import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import postDepartementComparer from "services/postDepartementComparer";
import { addEntity } from "store/entitiesComparer.slice";

export interface UsePostEntityComparerProps {
    code: string;
    libelle: string;
}
const usePostDepartementComparer = () => {
    const dispatch = useDispatch();

    return useMutation(
        ["postDepartementComparer"],
        async ({ code, libelle }: UsePostEntityComparerProps) =>
            postDepartementComparer(code, libelle),
        {
            onSuccess: DepartementComparer => {
                dispatch(addEntity(DepartementComparer));
            },
        }
    );
};

export default usePostDepartementComparer;
