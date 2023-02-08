import _ from "lodash";
import type { Criteres } from "models/entity/entity.interface";

export default (
    criteres: Criteres,
    year: string,
    yearTotal: number
): number => {
    if (_.isEmpty(criteres)) return 0;
    const {
        populationInsee: { annees },
    } = criteres;
    if (!annees) return 0;
    const getHabitantsIndex = annees.findIndex(
        annee => Object.keys(annee)[0] === String(year)
    );

    let valeur = null;
    if (~getHabitantsIndex) {
        valeur = annees[getHabitantsIndex][year].valeur;
    }

    if (!valeur) return 0;
    return yearTotal / Number(valeur);
};
