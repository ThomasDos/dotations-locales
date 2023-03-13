import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    resetAppSettings,
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

    const {
        data: fetchDepartementData,
        error: fetchDepartementError,
        isLoading: fetchDepartementIsLoading,
    } = useFetchDepartement(code, !!code && isDepartement && !hasSameCode);

    const isFetching =
        fetchCommuneIsLoading ||
        fetchEPCIIsLoading ||
        fetchDepartementIsLoading;
    const fetchEntityData =
        fetchCommuneData ||
        fetchEPCIData ||
        fetchDepartementData ||
        initialEntity;
    const showSpinner = !fetchEntityData || isFetching;
    const fetchEntityError =
        fetchCommuneError || fetchEPCIError || fetchDepartementError;

    if (fetchEntityError) {
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
            const codeLength = code.length;

            switch (true) {
                case codeLength === 2:
                    dispatch(updateIsDepartementTrue());
                    break;

                case codeLength === 5:
                    dispatch(updateIsCommuneTrue());
                    break;

                case codeLength === 9:
                    dispatch(updateIsEPCITrue());
                    break;

                default:
                    dispatch(resetAppSettings());
                    break;
            }
        }
    }, [code]);

    return {
        showSpinner,
    };
};
