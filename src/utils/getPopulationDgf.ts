import _ from "lodash";
import type { Criteres } from "models/entity/entity.interface";

export default (criteres: Criteres, year: string) => {
    if (_.isEmpty(criteres)) return 0;
    const populationDgf = criteres.populationDgf;
    if (!populationDgf) return 0;
    const { annees } = populationDgf;
    if (!annees.length) return 0;

    const getHabitantsIndex = annees.findIndex(
        annee => Object.keys(annee)[0] === String(year)
    );

    return annees[getHabitantsIndex][year].valeur as number;
};
