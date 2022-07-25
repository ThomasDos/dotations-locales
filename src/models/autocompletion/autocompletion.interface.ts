export interface AutocompletionDto {
    autocompletion: string;
    code: string;
    commune: AutocompletionCommune;
    distance: number;
    distributions_postales: DistributionPostaleDto[];
}

export interface Autocompletion {
    autocompletion: string;
    code: string;
    commune: AutocompletionCommune;
    distance: number;
    distributionsPostales: DistributionPostale[];
}

interface AutocompletionCommune {
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

export interface DistributionPostaleDto {
    code_commune_insee: string;
    code_postal: string;
    coordonnees_gps: [number, number];
    libelle_d_acheminement: string;
    nom_de_la_commune: string;
}

export interface DistributionPostale {
    codeCommuneInsee: string;
    codePostal: string;
    coordonneesGps: [number, number];
    libelleDacheminement: string;
    nomDeLaCommune: string;
}
