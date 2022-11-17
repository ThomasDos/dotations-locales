import { Commune, CommuneDto } from "models/commune/commune.interface";

export interface PostSimulation {
    code_insee: string;
    periode_loi: string;
    data: PostSimulationData;
}

export interface CommuneSimulationDto extends CommuneDto {
    avertissement_precision_simulation: boolean;
}

export interface CommuneSimulation extends Commune {
    avertissementPrecisionSimulation?: boolean;
}

export type PostSimulationData = Record<string, boolean | number>;
