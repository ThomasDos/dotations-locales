/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import _ from "lodash";
import type { Criteres } from "models/commune/commune.interface";

export default (
    criteres: Criteres,
    year: number,
    yearTotal: number
): number => {
    if (_.isEmpty(criteres)) return 0;
    const {
        populationDgf: { annees },
    } = criteres;
    if (!annees) return 0;
    const getHabitantsIndex = annees.findIndex(
        annee => Object.keys(annee)[0] === String(year)
    );

    const { valeur } = annees[getHabitantsIndex][year];

    if (!valeur) return 0;
    return yearTotal / Number(valeur);
};
