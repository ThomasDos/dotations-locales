import type { Criteres } from "models/commune/commune.interface";

export default function filterOutBooleanCriteres(criteres: Criteres): Criteres {
    const currentCriteres = { ...criteres };
    const criteresKeys = Object.keys(currentCriteres);
    const criteresFilteredToDelete = criteresKeys.filter(
        (critereKey: string) => {
            const critereAnnee = criteres[critereKey].annees[0];
            const critereValeur =
                critereAnnee[Object.keys(critereAnnee)[0]].valeur;
            return critereValeur === "Non" || critereValeur === "Oui";
        }
    );
    criteresFilteredToDelete.forEach((keyToDelete: string) => {
        delete currentCriteres[keyToDelete];
    });
    return currentCriteres;
}
