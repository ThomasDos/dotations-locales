/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Criteres } from "models/commune/commune.interface";

export default (
    criteres: Criteres,
    year: string,
    yearTotal: number
): number => {
    const {
        populationDgf: { annees },
    } = criteres;
    if (!annees) return 0;
    const getHabitantsIndex = annees.findIndex(
        annee => Object.keys(annee)[0] === year
    );

    const { valeur } = annees[getHabitantsIndex][year];

    if (!valeur) return 0;
    return yearTotal / Number(valeur);
};
