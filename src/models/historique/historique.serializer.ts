import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import { HistoriqueDotations } from "./historique.interface";

export const historiqueSerializer = (
    dotation: Dotation
): HistoriqueDotations => {
    if (_.isEmpty(dotation.annees)) return [];

    return dotation.annees
        .map(annee => {
            const [year] = Object.keys(annee);
            return {
                label: `${formatNumberWithSpace(annee[year] / 1000)}K€`,
                value: annee[year],
                year,
            };
        })
        .reverse();
};
