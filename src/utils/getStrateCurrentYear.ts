import { Criteres } from "models/entity/entity.interface";

function getStrateCurrentYear(
    criteresGeneraux: Criteres,
    currentYear: string
): string {
    const strate = criteresGeneraux.strateDemographique.annees[0][currentYear]
        .valeur as string;

    return strate;
}

export default getStrateCurrentYear;
