import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsCommune,
    selectIsEPCI,
    updateIsCommuneTrue,
    updateIsEPCITrue,
} from "store/appSettings.slice";
import {
    hydrateInitialEntity,
    selectInitialCode,
    selectInitialEntity,
} from "store/initialEntity.slice";
import { hydrateSimulationEntity } from "store/simulationEntity.slice";
import { toastError } from "utils/customToasts";
import useFetchCommune from "./useFetchCommune";
import useFetchEPCI from "./useFetchEPCI";

export default (code: string) => {
    const initialCode = useSelector(selectInitialCode);
    const initialEntity = useSelector(selectInitialEntity);
    const hasSameCode = code === initialCode;

    const dispatch = useDispatch();
    const router = useRouter();

    const isEPCI = useSelector(selectIsEPCI);
    const isCommune = useSelector(selectIsCommune);

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(code, !!code && isCommune && !hasSameCode);

    const {
        data: fetchEPCIData,
        error: fetchEPCIError,
        isLoading: fetchEPCIIsLoading,
    } = useFetchEPCI(code, !!code && isEPCI && !hasSameCode);

    const isFetching = fetchCommuneIsLoading || fetchEPCIIsLoading;
    const fetchEntityData = fetchCommuneData || fetchEPCIData || initialEntity;
    const showSpinner = !fetchEntityData || isFetching;

    if (fetchCommuneError || fetchEPCIError) {
        toastError("Une erreur est survenue avec cette commune");
        router.push("/");
    }

    useEffect(() => {
        if (!fetchEntityData || isFetching || !code) return;
        dispatch(hydrateInitialEntity(fetchEntityData));
        !hasSameCode && dispatch(hydrateSimulationEntity(fetchEntityData));
    }, [fetchEntityData, hasSameCode, isFetching]);

    useEffect(() => {
        if (code && !hasSameCode) {
            const hasEPCICodeLength = code.length > 5;

            hasEPCICodeLength
                ? dispatch(updateIsEPCITrue())
                : dispatch(updateIsCommuneTrue());
        }
    }, [code]);

    return {
        showSpinner,
    };
};
