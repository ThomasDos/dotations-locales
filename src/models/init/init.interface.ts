export interface InitDataDto {
    sources_donnees: InitDataSourcesDonneesDto;
    base_calcul: string;
    derniere_maj_donnees: string;
    simulation_periodes: InitSimulationPeriodes;
}
export type InitData = {
    sourcesDonnees: InitDataSourcesDonnees;
    baseCalcul: string;
    derniereMajDonnees: string;
    simulationPeriodes: InitSimulationPeriodes;
};

export type InitSimulationPeriodes = InitSimulationPeriode[];
export interface InitSimulationPeriode {
    annee: string;
    label: string;
}

export type InitDataSourcesDonneesDto = Record<InitEntities, InitEntityDto>;
export type InitDataSourcesDonnees = Record<InitEntities, InitEntity | null>;

export type InitEntityDto = Record<
    string,
    {
        fichiers: InitEntityFichiersDto | null;
        liens_externes: InitLiensExternes | null;
    }
>;
export type InitEntity = Record<
    string,
    {
        fichiers: InitEntityFichiers | null;
        liensExternes: InitLiensExternes | null;
    }
>;

export interface InitEntityFichiersDto {
    national_criteres: null | InitNationalFichiersDto;
    national_montants: null | InitNationalFichiersDto;
    sous_dotations: null | (InitEntityDto | null)[];
}
export interface InitEntityFichiers {
    nationalCriteres: null | InitNationalFichiers;
    nationalMontants: null | InitNationalFichiers;
    sousDotations: null | (InitEntity | null)[];
}

export type InitLiensExternes = InitLienExterne[];
export interface InitLienExterne {
    label: string;
    url: string;
}

export interface InitNationalFichiersDto {
    label: string;
    nom_fichier: string;
}
export interface InitNationalFichiers {
    label: string;
    nomFichier: string;
}

export type InitEntities = "commune" | "epci" | "departement";
