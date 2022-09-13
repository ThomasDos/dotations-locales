import type { Dotations } from "models/commune/commune.interface";

export default (dotations: Dotations, currentYear: string): Dotations => {
    return Object.fromEntries(
        Object.entries(dotations).sort(
            ([, a], [, b]) =>
                b.annees[0][currentYear] - a.annees[0][currentYear]
        )
    );
};
