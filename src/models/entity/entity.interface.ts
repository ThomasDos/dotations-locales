//COMMUNE
export interface EntityDto {
    code: string;
    dotations: DotationsDto;
    criteres_generaux?: CriteresDto | null;
    part_dotation_rrf?: DotationRrfDto;
    echelons?: Echelons;
    libelle: string;
}

export interface Entity {
    code: string;
    dotations: Dotations;
    criteresGeneraux: Criteres;
    annees: EntityAnnee;
    anneesCriteres: EntityAnnee;
    partDotationRrf?: DotationRrfDto;
    echelons?: Echelons;
    libelle: string;
}

export type EntityAnnee = string[];
//DOTATIONS

export type DotationsDto = Record<string, DotationDto>;

export interface DotationDto {
    annees: DotationAnnee[];
    sous_dotations?: SousDotationsDto;
    criteres: CriteresDto;
}

export interface DotationRrfDto {
    annees: Record<string, DotationRrfAnnee>[];
}

export type Echelons = Record<string, string[]>;

export interface DotationRrfAnnee {
    valeur: number;
    unite: string;
}

export type Dotations = Record<string, Dotation>;

export interface Dotation {
    key: string;
    annees: DotationAnnee[];
    criteres: Criteres;
    sousDotations?: SousDotations;
    description: string;
    title: string;
    label: string;
    info?: string;
    links?: Links | DgfLink;
    backLinks?: Links;
}

interface Link {
    linkText: string;
    dotationKey: string;
}

export type Links = Link[];

export type DgfLink = Record<string, Links>;

export type SousDotationsDto = DotationsDto[];
export type SousDotations = Dotations[];

type DotationAnnee = Record<string, number>;

//CRITERES
export type CriteresDto = Record<
    string,
    {
        annees: CritereAnnee[];
    }
>;
export type Criteres = Record<string, Critere>;

export interface Critere {
    annees: CritereAnnee[];
    description: string;
}

export type CritereAnnee = Record<
    string,
    {
        unite: string | null;
        valeur: number | string;
    }
>;
