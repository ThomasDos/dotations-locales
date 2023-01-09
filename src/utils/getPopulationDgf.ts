import _ from "lodash";
import type { Criteres } from "models/commune/commune.interface";

export default (criteres: Criteres, year: string) => {
    if (_.isEmpty(criteres)) return "";
    const populationDgf = criteres.populationDgf;
    if (!populationDgf) return "";
    const { annees } = populationDgf;

    const getHabitantsIndex = annees.findIndex(
        annee => Object.keys(annee)[0] === String(year)
    );

    return annees[getHabitantsIndex][year].valeur;
};
