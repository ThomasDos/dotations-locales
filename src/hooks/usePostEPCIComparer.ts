import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import postEPCIComparer from "services/postEPCIComparer";
import { addEntity } from "store/entitiesComparer.slice";

export interface UsePostEntityComparerProps {
    code: string;
    libelle: string;
}
const usePostEPCIComparer = () => {
    const dispatch = useDispatch();

    return useMutation(
        ["postEPCIComparer"],
        async ({ code, libelle }: UsePostEntityComparerProps) =>
            postEPCIComparer(code, libelle),
        {
            onSuccess: EPCIComparer => {
                dispatch(addEntity(EPCIComparer));
            },
        }
    );
};

export default usePostEPCIComparer;
