export type IFetchEntityResult = IEntity[];

export interface IEntity {
    autocompletion: string;
    code: string;
    commune: ICommune;
    distance: number;
    distributions_postales: IDistributionPostale[];
}

interface ICommune {
    ARR: string;
    CAN: string;
    COM: string;
    CTCD: string;
    DEP: string;
    LIBELLE: string;
    NCC: string;
    NCCENR: string;
    REG: string;
    TNCC: number;
    TYPECOM: string;
}

interface IDistributionPostale {
    code_commune_insee: string;
    code_postal: string;
    coordonnees_gps: [number, number];
    libelle_d_acheminement: string;
    nom_de_la_commune: string;
}
