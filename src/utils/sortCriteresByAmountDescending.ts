import type { Criteres } from "models/entity/entity.interface";

export default (criteres: Criteres, currentYear: string): Criteres => {
    return Object.fromEntries(
        Object.entries(criteres).sort(
            ([, a], [, b]) =>
                Number(b.annees[0][currentYear].valeur) -
                Number(a.annees[0][currentYear].valeur)
        )
    );
};
