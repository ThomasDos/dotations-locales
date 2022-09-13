import type { Dotations } from "models/commune/commune.interface";

import sortDotationsByAmountDescending from "./sortDotationsByAmountDescending";

export default (
    dotations: Dotations,
    currentYear: string
): {
    dotationsEligibles: Dotations;
    dotationsNonEligibles: Dotations;
} => {
    const dotationsKeys = Object.keys(dotations);
    const dotationsEligibles: Dotations = {};
    const dotationsNonEligibles: Dotations = {};

    if (!dotationsKeys.length) {
        return {
            dotationsEligibles,
            dotationsNonEligibles,
        };
    }

    dotationsKeys.forEach((dotationKey: string) => {
        const dotation = dotations[dotationKey];
        const dotationAmout = dotation.annees[0][currentYear];
        if (dotationAmout) {
            dotationsEligibles[dotationKey] = dotation;
        } else {
            dotationsNonEligibles[dotationKey] = dotation;
        }
    });

    const dotationsEligiblesSorted = sortDotationsByAmountDescending(
        dotationsEligibles,
        currentYear
    );
    return {
        dotationsEligibles: dotationsEligiblesSorted,
        dotationsNonEligibles,
    };
};
