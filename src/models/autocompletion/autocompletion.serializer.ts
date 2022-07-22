import type {
    IAutocompletion,
    IAutocompletionDto,
    IDistributionPostale,
    IDistributionPostaleDto,
} from "./autocompletion.interface";

const distributionPostalesSerializer = (
    raw: IDistributionPostaleDto
): IDistributionPostale => {
    return {
        codeCommuneInsee: raw.code_commune_insee,
        codePostal: raw.code_postal,
        coordonneesGps: raw.coordonnees_gps,
        libelleDacheminement: raw.libelle_d_acheminement,
        nomDeLaCommune: raw.nom_de_la_commune,
    };
};

const autocompletionSerializer = (
    rawAutocompletion: IAutocompletionDto
): IAutocompletion => ({
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
    rawResult: IAutocompletionDto[]
): IAutocompletion[] =>
    rawResult.map(rawAutocompletion =>
        autocompletionSerializer(rawAutocompletion)
    );
