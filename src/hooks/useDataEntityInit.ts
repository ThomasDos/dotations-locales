import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    resetAppSettings,
    selectEntityDenomination,
    selectIsCommune,
    selectIsDepartement,
    selectIsEPCI,
    updateIsCommuneTrue,
    updateIsDepartementTrue,
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
import useFetchDepartement from "./useFetchDepartement";
import useFetchEPCI from "./useFetchEPCI";

export default (code: string) => {
    const initialCode = useSelector(selectInitialCode);
    const initialEntity = useSelector(selectInitialEntity);
    const hasSameCode = code === initialCode;

    const dispatch = useDispatch();
    const router = useRouter();

    const isEPCI = useSelector(selectIsEPCI);
    const isCommune = useSelector(selectIsCommune);
    const isDepartement = useSelector(selectIsDepartement);
    const entityDenomination = useSelector(selectEntityDenomination);

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isInitialLoading: fetchCommuneIsLoading,
    } = useFetchCommune(code, !!code && isCommune && !hasSameCode);

    const {
        data: fetchEPCIData,
        error: fetchEPCIError,
        isInitialLoading: fetchEPCIIsLoading,
    } = useFetchEPCI(code, !!code && isEPCI && !hasSameCode);

    const {
        data: fetchDepartementData,
        error: fetchDepartementError,
        isInitialLoading: fetchDepartementIsLoading,
    } = useFetchDepartement(code, !!code && isDepartement && !hasSameCode);

    const fetchEntityIsLoading =
        fetchCommuneIsLoading ||
        fetchEPCIIsLoading ||
        fetchDepartementIsLoading;

    const fetchEntityData =
        fetchCommuneData ||
        fetchEPCIData ||
        fetchDepartementData ||
        initialEntity;

    const showSpinner = !fetchEntityData.code || fetchEntityIsLoading;

    const fetchEntityError =
        fetchCommuneError || fetchEPCIError || fetchDepartementError;

    if (
        fetchEntityError &&
        !fetchEntityIsLoading &&
        (!fetchEntityData.code || fetchEntityData.code !== code)
    ) {
        toastError(`Une erreur est survenue avec votre ${entityDenomination}`);
        router.push("/");
    }

    useEffect(() => {
        if (!fetchEntityData.code || fetchEntityIsLoading || !code) return;
        dispatch(hydrateInitialEntity(fetchEntityData));
        !hasSameCode && dispatch(hydrateSimulationEntity(fetchEntityData));
    }, [fetchEntityData, hasSameCode, fetchEntityIsLoading]);

    useEffect(() => {
        if (code && !hasSameCode) {
            const codeLength = code.length;

            if (codeLength === 2 || codeLength === 3) {
                dispatch(updateIsDepartementTrue());
                return;
            }

            if (codeLength === 5) {
                dispatch(updateIsCommuneTrue());
                return;
            }

            if (codeLength === 9) {
                dispatch(updateIsEPCITrue());
                return;
            }

            dispatch(resetAppSettings());
        }
    }, [code]);

    return {
        showSpinner,
    };
};
