import type { Dotations } from "models/commune/commune.interface";

export default (dotations: Dotations): Dotations => {
    return Object.fromEntries(
        Object.entries(dotations).sort(
            ([, a], [, b]) =>
                b.annees[0][new Date().getFullYear()] -
                a.annees[0][new Date().getFullYear()]
        )
    );
};
