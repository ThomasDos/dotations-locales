import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetAppSettings } from "store/appSettings.slice";
import { resetEntitiesComparer } from "store/entitiesComparer.slice";
import { resetInitialEntity } from "store/initialEntity.slice";
import { resetSimulationEntity } from "store/simulationEntity.slice";

const useHomeInit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSimulationEntity());
        dispatch(resetInitialEntity());
        dispatch(resetEntitiesComparer());
        dispatch(resetAppSettings());
    }, [dispatch]);
};

export default useHomeInit;
