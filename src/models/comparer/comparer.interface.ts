export interface DotationFormattedChartComparer {
    communeTitle?: string;
    communeTitleMain?: string;
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
