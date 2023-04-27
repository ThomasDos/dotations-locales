import { Dotations } from "models/entity/entity.interface";
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

    //La DPEL et la DPB ne font pas partie de la DGF et doivent être considéré différemment
    const dotationKeyToIgnore = ["DPEL", "DPB"];

    dotationsKeys.forEach((dotationKey: string) => {
        const dotation = dotations[dotationKey];
        const dotationAmout = dotation.annees[0][currentYear];

        if (dotationKeyToIgnore.includes(dotation.label)) return;

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
