import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateIsSimulationFalse } from "store/appSettings.slice";
import { resetCommunesComparer } from "store/communesComparer.slice";
import { resetInitialCommune } from "store/initialCommune.slice";
import { resetSimulationCommune } from "store/simulationCommune.slice";

const useHomeInit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSimulationCommune());
        dispatch(resetInitialCommune());
        dispatch(resetCommunesComparer());
        dispatch(updateIsSimulationFalse());
    }, [dispatch]);
};

export default useHomeInit;
