import _ from "lodash";
import type { Criteres } from "models/entity/entity.interface";

const getPopulationInsee = (criteres: Criteres, year: string) => {
    if (_.isEmpty(criteres)) return 0;
    const populationInsee = criteres.populationInsee;
    if (!populationInsee) return 0;
    const { annees } = populationInsee;
    if (!annees.length) return 0;

    const getHabitantsIndex = annees.findIndex(
        annee => Object.keys(annee)[0] === String(year)
    );

    return annees[getHabitantsIndex][year].valeur as number;
};

export default getPopulationInsee;
