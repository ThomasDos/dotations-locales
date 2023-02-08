import { Entity } from "models/entity/entity.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateInitialEntity } from "store/initialEntity.slice";
import { hydrateSimulationEntity } from "store/simulationEntity.slice";

export default (fetchEntityData: Entity | undefined) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!fetchEntityData) return;
        dispatch(hydrateInitialEntity(fetchEntityData));
        dispatch(hydrateSimulationEntity(fetchEntityData));
    }, [fetchEntityData, dispatch]);
};
