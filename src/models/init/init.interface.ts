export interface InitDataDto {
    sources_donnees: InitDataSourcesDonneesDto;
    base_calcul: string;
    derniere_maj_donnees: string;
    simulation_periodes: { annee: string; label: string }[];
}

export type InitDataSourcesDonneesDto = Record<
    "commune" | "epci" | "departement",
    InitEntityDto
>;

export type InitEntityDto = Record<string, InitEntityFichiersDto>;

interface InitEntityFichiersDto {
    national_criteres: null | InitNationalFichiersDto;
    national_montants: null | InitNationalFichiersDto;
    sous_dotations: null | InitEntityDto[];
}

export interface InitNationalFichiersDto {
    label: string;
    nom_fichier: string;
}

export type InitData = {
    sourcesDonnees: InitDataSourcesDonnees;
    baseCalcul: string;
    derniereMajDonnees: string;
    simulationPeriodes: { annee: string; label: string }[];
};

export type InitDataSourcesDonnees = Record<
    "commune" | "epci" | "departement",
    InitEntity
>;

export type InitEntity = Record<string, InitEntityFichiers>;

export interface InitEntityFichiers {
    nationalCriteres: null | InitNationalFichiers;
    nationalMontants: null | InitNationalFichiers;
    sousDotations: null | InitEntity[];
}

export interface InitNationalFichiers {
    label: string;
    nomFichier: string;
}
