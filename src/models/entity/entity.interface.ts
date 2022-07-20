export type IFetchEntityResultDto = IEntityDto[];
export type IFetchEntityResult = IEntity[];

export interface IEntityDto {
    autocompletion: string;
    code: string;
    commune: ICommune;
    distance: number;
    distributions_postales: IDistributionPostaleDto[];
}

export interface IEntity {
    autocompletion: string;
    code: string;
    commune: ICommune;
    distance: number;
    distributionsPostales: IDistributionPostale[];
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

export interface IDistributionPostaleDto {
    code_commune_insee: string;
    code_postal: string;
    coordonnees_gps: [number, number];
    libelle_d_acheminement: string;
    nom_de_la_commune: string;
}

export interface IDistributionPostale {
    codeCommuneInsee: string;
    codePostal: string;
    coordonneesGps: [number, number];
    libelleDacheminement: string;
    nomDeLaCommune: string;
}
