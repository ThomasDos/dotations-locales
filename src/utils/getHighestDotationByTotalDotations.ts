import { DotationsEchelonFormated } from "models/comparer/comparer.interface";

function getHighestDotationByTotalDotations(
    entities: DotationsEchelonFormated
) {
    return entities.reduce((acc, curr) => {
        if (acc < curr.totalDotation) {
            return curr.totalDotation;
        }
        return acc;
    }, entities[0].totalDotation);
}

export default getHighestDotationByTotalDotations;
