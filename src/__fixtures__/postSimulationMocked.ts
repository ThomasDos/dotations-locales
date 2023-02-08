import { EntitySimulationDto } from "models/simulation/simulation.interface";
import { fetchCommuneMocked } from "./fetchCommuneMocked";

export const postSimulationMocked: EntitySimulationDto = {
    ...fetchCommuneMocked,
    avertissement_precision_simulation: true,
};
