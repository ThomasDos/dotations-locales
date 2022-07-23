export interface CommuneDto {
    code_insee: string;
    dotations: DotationsDto;
    criteres: CriteresDto;
}

export interface Commune {
    codeInsee: string;
    dotations: Dotations;
    criteres: Criteres;
}

export type DotationsDto = Record<
    string,
    {
        annees: DotationAnnee[];
        sous_dotations?: SousDotationsDto;
    }
>;
export type Dotations = Record<string, Dotation>;

export interface Dotation {
    annees: DotationAnnee[];
    sousDotations?: SousDotations;
    description: string;
    title: string;
}

export type SousDotationsDto = DotationsDto[];
export type SousDotations = Dotations[];

type DotationAnnee = Record<string, number>;

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
        valeur: string;
    }
>;
