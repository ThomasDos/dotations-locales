import { Entity, EntityDto } from "models/entity/entity.interface";

export interface DotationFormattedChartComparer {
    entityTitle?: string;
    entityTitleMain?: string;
    value: number;
    label: string;
    link?: string;
}

export interface DotationFormattedBoardDgfComparer {
    titleRow: string;
    totalDotations: number;
    dotations: {
        value: number;
        label: string;
    }[];
}

export type DotationsFormattedChartComparer = DotationFormattedChartComparer[];

export type DotationsFormattedBoardDgfComparer =
    DotationFormattedBoardDgfComparer[];

export interface DotationEchelonFormated {
    totalDotation: number;
    libelle: string;
    evolutionDotations: number;
    strate: number;
    dotationDgfPerHabitant: number;
    code: string;
}

export type DotationsEchelonFormated = DotationEchelonFormated[];

export type rawEntitiesComparer = Record<string, EntityDto[]>;
export type EntitiesComparer = Record<string, Entity[]>;
