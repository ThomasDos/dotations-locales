import _ from "lodash";
import { Dotation } from "models/entity/entity.interface";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import { HistoriqueDotations } from "./historique.interface";

export const historiqueSerializer = (
    dotation: Dotation
): HistoriqueDotations => {
    if (_.isEmpty(dotation?.annees)) return [];

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
