import type {
    Autocompletion,
    AutocompletionDto,
    DistributionPostale,
    DistributionPostaleDto,
} from "./autocompletion.interface";

const distributionPostalesSerializer = (
    raw: DistributionPostaleDto
): DistributionPostale => {
    return {
        codeCommuneInsee: raw.code_commune_insee,
        codePostal: raw.code_postal,
        coordonneesGps: raw.coordonnees_gps,
        libelleDacheminement: raw.libelle_d_acheminement,
        nomDeLaCommune: raw.nom_de_la_commune,
    };
};

const autocompletionSerializer = (
    rawAutocompletion: AutocompletionDto
): Autocompletion => ({
    autocompletion: rawAutocompletion.autocompletion,
    code: rawAutocompletion.code,
    commune: rawAutocompletion.commune,
    distance: rawAutocompletion.distance,
    distributionsPostales: rawAutocompletion.distributions_postales.map(
        distributionPostale =>
            distributionPostalesSerializer(distributionPostale)
    ),
});

export const fetchAutocompletionSerializer = (
    rawResult: AutocompletionDto[]
): Autocompletion[] =>
    rawResult.map(rawAutocompletion =>
        autocompletionSerializer(rawAutocompletion)
    );
