export type InitDataDto = Record<
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

export type InitData = Record<"commune" | "epci" | "departement", InitEntity>;

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
