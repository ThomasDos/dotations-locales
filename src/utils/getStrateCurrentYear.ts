import { Criteres } from "models/entity/entity.interface";

function getStrateCurrentYear(
    criteresGeneraux: Criteres,
    currentYear: string
): number {
    const strate = criteresGeneraux?.strateDemographique?.annees[0][currentYear]
        .valeur as number;

    if (!strate) return 0;

    return strate;
}

export default getStrateCurrentYear;
