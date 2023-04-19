import type { Criteres } from "models/entity/entity.interface";
import sortCriteresByAmountDescending from "./sortCriteresByAmountDescending";

const sortCriteresEligiblesOrNonEligibles = (
    Criteres: Criteres,
    currentYear: string
): {
    criteresEligibles: Criteres;
    criteresNonEligibles: Criteres;
} => {
    const criteresKeys = Object.keys(Criteres);
    const criteresEligibles: Criteres = {};
    const criteresNonEligibles: Criteres = {};

    if (!criteresKeys.length) {
        return {
            criteresEligibles,
            criteresNonEligibles,
        };
    }

    criteresKeys.forEach((critereKey: string) => {
        const critere = Criteres[critereKey];
        const critereAmount = critere.annees[0]?.[currentYear]?.valeur;
        if (critereAmount && critereAmount != 0 && critereAmount != "Non") {
            criteresEligibles[critereKey] = critere;
        } else {
            criteresNonEligibles[critereKey] = critere;
        }
    });

    const criteresEligiblesSorted = sortCriteresByAmountDescending(
        criteresEligibles,
        currentYear
    );

    return {
        criteresEligibles: criteresEligiblesSorted,
        criteresNonEligibles,
    };
};

export default sortCriteresEligiblesOrNonEligibles;
