import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    updateIsCommuneFalse,
    updateIsEPCIFalse,
    updateIsSimulationFalse,
} from "store/appSettings.slice";
import { resetEntitiesComparer } from "store/entitiesComparer.slice";
import { resetInitialEntity } from "store/initialEntity.slice";
import { resetSimulationEntity } from "store/simulationEntity.slice";

const useHomeInit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSimulationEntity());
        dispatch(resetInitialEntity());
        dispatch(resetEntitiesComparer());
        dispatch(updateIsSimulationFalse());
        dispatch(updateIsEPCIFalse());
        dispatch(updateIsCommuneFalse());
    }, [dispatch]);
};

export default useHomeInit;
