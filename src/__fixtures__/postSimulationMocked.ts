import { CommuneSimulationDto } from "models/simulation/simulation.interface";
import { fetchCommuneMocked } from "./fetchCommuneMocked";

export const postSimulationMocked: CommuneSimulationDto = {
    ...fetchCommuneMocked,
    avertissement_precision_simulation: true,
};
