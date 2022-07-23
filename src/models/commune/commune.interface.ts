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
export type Dotations = Record<
    string,
    {
        annees: DotationAnnee[];
        sousDotations?: SousDotations;
        description: string;
    }
>;

export type SousDotationsDto = DotationsDto[];
export type SousDotations = Dotations[];

type DotationAnnee = Record<string, number>;

export type CriteresDto = Record<
    string,
    {
        annees: CritereAnnee[];
    }
>;
export type Criteres = Record<
    string,
    {
        annees: CritereAnnee[];
        description: string;
    }
>;

type Critere = Record<string, string | null>;

type CritereAnnee = Record<string, Critere>;
