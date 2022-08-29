import type { Criteres } from "models/commune/commune.interface";

import sortCriteresByAmountDescending from "./sortCriteresByAmountDescending";

export default (
    Criteres: Criteres
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
        const critereAmount =
            critere.annees[0][new Date().getFullYear()].valeur;
        if (critereAmount && critereAmount != 0 && critereAmount != "Non") {
            criteresEligibles[critereKey] = critere;
        } else {
            criteresNonEligibles[critereKey] = critere;
        }
    });

    const criteresEligiblesSorted =
        sortCriteresByAmountDescending(criteresEligibles);

    return {
        criteresEligibles: criteresEligiblesSorted,
        criteresNonEligibles,
    };
};
