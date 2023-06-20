import {
    DotationEchelonFormated,
    DotationsEchelonFormated,
} from "models/comparer/comparer.interface";

function sortDotationsEchelonComparerByKey(
    entities: DotationsEchelonFormated,
    key: keyof DotationEchelonFormated
) {
    return entities.sort((a, b) => {
        if (!a?.[key] || !b?.[key]) {
            return 0;
        }
        if (a[key]! < b[key]!) {
            return 1;
        }
        if (a[key]! > b[key]!) {
            return -1;
        }
        return 0;
    });
}

export default sortDotationsEchelonComparerByKey;
