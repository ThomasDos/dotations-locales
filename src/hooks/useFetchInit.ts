import { useQuery } from "@tanstack/react-query";
import { InitData } from "models/init/init.interface";
import { useDispatch } from "react-redux";
import fetchInit from "services/fetchInit";
import { hydrateInit } from "store/appSettings.slice";

const useFetchInit = () => {
    const dispatch = useDispatch();
    return useQuery(["fetchInit"], fetchInit, {
        onSuccess: (data: InitData) => {
            dispatch(hydrateInit(data));
        },
    });
};

export default useFetchInit;
