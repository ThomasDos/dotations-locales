export interface PostSimulation {
    code_insee: string;
    periode_loi: string;
    data: PostSimulationData;
}

export type PostSimulationData = Record<string, boolean | number>;
