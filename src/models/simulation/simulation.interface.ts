export interface PostSimulation {
    code_insee: string;
    periode: string;
    data: PostSimulationData;
}

export type PostSimulationData = Record<string, boolean | number>;
