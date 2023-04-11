import { useQuery } from "@tanstack/react-query";
import { InitData } from "models/init/init.interface";
import { useDispatch } from "react-redux";
import fetchInit from "services/fetchInit";
import { hydrateFichiers } from "store/appSettings.slice";

const useFetchInit = () => {
    const dispatch = useDispatch();
    return useQuery(["fetchInit"], async () => fetchInit(), {
        onSuccess: (data: InitData) => {
            dispatch(hydrateFichiers(data));
        },
    });
};

export default useFetchInit;
