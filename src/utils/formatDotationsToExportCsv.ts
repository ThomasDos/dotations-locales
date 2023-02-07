import { Dotations } from "models/entity/entity.interface";

const formatDotationsToExportCsv = (dotations: Dotations) =>
    Object.keys(dotations).map(key => {
        const { title, annees } = dotations[key];
        let dotationFormatted: Record<string, string> = { title };
        annees.forEach(annee => {
            const anneeKey = Object.keys(annee)[0];
            dotationFormatted[anneeKey] = String(annee[anneeKey]);
        });
        return dotationFormatted;
    });

export default formatDotationsToExportCsv;
