import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

interface HistoriqueDotation {
    year: string;
    label: string;
    value: number;
}
type HistoriqueDotations = HistoriqueDotation[];

export const historiqueSerializer = (
    dotation: Dotation
): HistoriqueDotations => {
    if (_.isEmpty(dotation)) return [];

    return dotation.annees.reverse().map(annee => {
        const [year] = Object.keys(annee);
        return {
            label: `${formatNumberWithSpace(annee[year])}K€`,
            value: annee[year],
            year,
        };
    });
};
