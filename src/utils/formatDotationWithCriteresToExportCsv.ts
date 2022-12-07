import { Dotation } from "models/commune/commune.interface";

const formatDotationWithCriteresToExportCsv = (
    dotation: Dotation,
    titleTotal: string
) => {
    const { criteres, annees: dotationAnnees } = dotation;
    const totalRow: Record<string, string> = {
        title: `Montant total de la ${titleTotal}`,
    };
    const emptyRow: Record<string, string> = { title: " " };
    dotationAnnees.forEach(annee => {
        const anneeKey = Object.keys(annee)[0];
        totalRow[anneeKey] = String(annee[anneeKey]);
        emptyRow[anneeKey] = " ";
    });

    return [
        ...Object.keys(criteres).map(critereKey => {
            const { annees, description } = criteres[critereKey];
            const dotationFormatted: Record<string, string> = {
                title: description,
            };

            annees.forEach(annee => {
                const anneeKey = Object.keys(annee)[0];
                dotationFormatted[anneeKey] = String(annee[anneeKey].valeur);
            });

            return dotationFormatted;
        }),
        totalRow,
        emptyRow,
    ];
};

export default formatDotationWithCriteresToExportCsv;
