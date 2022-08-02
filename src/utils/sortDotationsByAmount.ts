import type { Dotations } from "models/commune/commune.interface";

export default (
    dotations: Dotations
): {
    dotationsEligibles: Dotations;
    dotationsNonEligibles: Dotations;
} => {
    let dotationsEligibles = {};
    let dotationsNonEligibles = {};

    const dotationsKeys = Object.keys(dotations);
    if (!dotationsKeys.length)
        return { dotationsEligibles, dotationsNonEligibles };

    dotationsEligibles = dotationsKeys
        .map((dotationKey: string) => {
            const dotation = dotations[dotationKey];
            return dotation.annees[0][new Date().getFullYear()]
                ? dotation
                : null;
        })
        .filter(Boolean);

    dotationsNonEligibles = dotationsKeys
        .map((dotationKey: string) => {
            const dotation = dotations[dotationKey];
            return dotation.annees[0][new Date().getFullYear()]
                ? null
                : dotation;
        })
        .filter(Boolean);

    return {
        dotationsEligibles: { ...dotationsEligibles },
        dotationsNonEligibles: { ...dotationsNonEligibles },
    };
};
