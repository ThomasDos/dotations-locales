import { DotationRrfDto } from "models/entity/entity.interface";

export interface RrfFormatted {
    rrfPercentageEvolution: number;
    rrfLabelText: string;
}

const formatRrfEvolution = (
    partDotationRrf?: DotationRrfDto
): null | RrfFormatted => {
    if (
        !partDotationRrf ||
        !partDotationRrf.annees[0] ||
        !partDotationRrf.annees[1]
    )
        return null;

    const [currentYearRrf] = Object.keys(partDotationRrf.annees[0]);
    const [lastYear] = Object.keys(partDotationRrf.annees[1]);
    const rrfPercentage = partDotationRrf.annees[0][currentYearRrf].valeur;
    const rrfPercentageLastYear = partDotationRrf.annees[1][lastYear].valeur;

    const rrfLabelText: string = `${rrfPercentage}%`;
    const rrfPercentageEvolution = rrfPercentage - rrfPercentageLastYear;

    return { rrfLabelText, rrfPercentageEvolution };
};

export default formatRrfEvolution;
