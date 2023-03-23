import capitalizeEveryFirstLetter from "utils/capitalizeEveryFirstLetter";
import type {
    AutocompletionCommune,
    AutocompletionCommuneDistributionPostale,
    AutocompletionCommuneDistributionPostaleDto,
    AutocompletionCommuneDto,
} from "./autocompletion.commune.interface";

export const distributionPostalesSerializer = (
    raw: AutocompletionCommuneDistributionPostaleDto
): AutocompletionCommuneDistributionPostale => {
    return {
        codeCommuneInsee: raw.code_commune_insee,
        codePostal: raw.code_postal,
        coordonneesGps: raw.coordonnees_gps,
        libelleDacheminement: raw.libelle_d_acheminement,
        nomDeLaCommune: raw.nom_de_la_commune,
    };
};

const autocompletionSerializer = (
    rawAutocompletion: AutocompletionCommuneDto
): AutocompletionCommune => ({
    autocompletion: rawAutocompletion.autocompletion,
    code: rawAutocompletion.code,
    distance: rawAutocompletion.distance,
    libelle: capitalizeEveryFirstLetter(rawAutocompletion.libelle),
});

export const fetchAutocompletionSerializer = (
    rawResult: AutocompletionCommuneDto[]
): AutocompletionCommune[] =>
    rawResult.map(rawAutocompletion =>
        autocompletionSerializer(rawAutocompletion)
    );
