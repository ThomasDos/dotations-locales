import type { Dotations } from "models/commune/commune.interface";

export default (dotations: Dotations, currentYear: string): number[] => {
    return Object.keys(dotations).reduce(
        (acc: number[], dotationKey: string, index: number) => {
            if (!dotations[dotationKey].annees[0][currentYear]) {
                acc.push(index + 2);
            }
            return acc;
        },
        []
    );
};
