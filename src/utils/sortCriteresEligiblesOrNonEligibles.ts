import type { Criteres } from "models/entity/entity.interface";
import sortCriteresByAmountDescending from "./sortCriteresByAmountDescending";

interface SortCriteresEligiblesOrNonEligiblesReturns {
    criteresEligibles: Criteres;
    criteresNonEligibles: Criteres;
}

function sortCriteresEligiblesOrNonEligibles(
    Criteres: Criteres,
    currentYear: string
): SortCriteresEligiblesOrNonEligiblesReturns {
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
        if (critereAmount && critereAmount !== "Non") {
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
}

export default sortCriteresEligiblesOrNonEligibles;
