import { Entity, EntityDto } from "models/entity/entity.interface";

export interface PostSimulation {
    code: string;
    periode_loi: string;
    data: PostSimulationData;
}

export interface EntitySimulationDto extends EntityDto {
    avertissement_precision_simulation: boolean;
}

export interface EntitySimulation extends Entity {
    avertissementPrecisionSimulation?: boolean;
}

export type PostSimulationData = Record<string, boolean | number>;
