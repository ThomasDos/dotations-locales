import type { Dotations } from "models/entity/entity.interface";

export default (dotations: Dotations, year: string): number => {
    const dotationsKeys = Object.keys(dotations);
    let total = 0;

    dotationsKeys.forEach((dotationKey: string) => {
        const { annees } = dotations[dotationKey];

        const currentYearIndex = annees.findIndex(
            annee => Object.keys(annee)[0] === year
        );

        total = total + annees[currentYearIndex][year];
    });

    return total;
};
