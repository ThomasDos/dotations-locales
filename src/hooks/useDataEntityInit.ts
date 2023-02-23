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
} from "store/initialEntity.slice";
import { hydrateSimulationEntity } from "store/simulationEntity.slice";
import { toastError } from "utils/customToasts";
import useFetchCommune from "./useFetchCommune";
import useFetchEPCI from "./useFetchEPCI";

export default (code: string) => {
    const initialCode = useSelector(selectInitialCode);
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

    const fetchEntityData = fetchCommuneData || fetchEPCIData;

    useEffect(() => {
        if (!fetchEntityData || hasSameCode) return;
        dispatch(hydrateInitialEntity(fetchEntityData));
        dispatch(hydrateSimulationEntity(fetchEntityData));
    }, [fetchEntityData]);

    useEffect(() => {
        if (code && !hasSameCode) {
            const hasEPCICodeLength = code.length > 5;

            hasEPCICodeLength
                ? dispatch(updateIsEPCITrue())
                : dispatch(updateIsCommuneTrue());
        }
    }, [code]);

    if (fetchCommuneError && fetchEPCIError) {
        toastError("Une erreur est survenue avec cette commune");
        router.push("/");
    }

    const showSpinner =
        (!fetchCommuneData && !fetchEPCIData) ||
        fetchCommuneIsLoading ||
        fetchEPCIIsLoading;

    return {
        fetchCommuneData,
        fetchCommuneError,
        fetchCommuneIsLoading,
        fetchEPCIData,
        fetchEPCIError,
        fetchEPCIIsLoading,
        showSpinner,
    };
};
