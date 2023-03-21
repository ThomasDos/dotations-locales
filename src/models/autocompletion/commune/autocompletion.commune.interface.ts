export interface AutocompletionCommuneDto {
    autocompletion: string;
    code: string;
    distance: number;
    libelle: string;
}

export interface AutocompletionCommune {
    autocompletion: string;
    code: string;
    distance: number;
    libelle: string;
}

export interface Entity {
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

export interface AutocompletionCommuneDistributionPostaleDto {
    code_commune_insee: string;
    code_postal: string;
    coordonnees_gps: [number, number];
    libelle_d_acheminement: string;
    nom_de_la_commune: string;
}

export interface AutocompletionCommuneDistributionPostale {
    codeCommuneInsee: string;
    codePostal: string;
    coordonneesGps: [number, number];
    libelleDacheminement: string;
    nomDeLaCommune: string;
}
