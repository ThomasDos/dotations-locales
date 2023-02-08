import { Dotations } from "models/entity/entity.interface";

export default (dotations: Dotations, currentYear: string): Dotations => {
    return Object.fromEntries(
        Object.entries(dotations).sort(
            ([, a], [, b]) =>
                b.annees[0][currentYear] - a.annees[0][currentYear]
        )
    );
};
