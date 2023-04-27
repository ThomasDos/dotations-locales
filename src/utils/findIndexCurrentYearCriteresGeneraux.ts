import { Criteres, EntityAnnee } from "models/entity/entity.interface";

const findIndexCurrentYearCriteresGeneraux = (
    criteresGeneraux: Criteres,
    critereKey: string,
    anneesCriteres: EntityAnnee
): number =>
    criteresGeneraux[critereKey].annees.findIndex(annee => {
        const anneeKey = Object.keys(annee)[0];
        return anneeKey === anneesCriteres[0];
    });

export default findIndexCurrentYearCriteresGeneraux;
