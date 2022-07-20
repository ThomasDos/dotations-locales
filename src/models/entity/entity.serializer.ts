import type {
    IDistributionPostale,
    IDistributionPostaleDto,
    IEntity,
    IEntityDto,
    IFetchEntityResult,
    IFetchEntityResultDto,
} from "./entity.interface";

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

const entitySerializer = (rawEntity: IEntityDto): IEntity => ({
    autocompletion: rawEntity.autocompletion,
    code: rawEntity.code,
    commune: rawEntity.commune,
    distance: rawEntity.distance,
    distributionsPostales: rawEntity.distributions_postales.map(
        distributionPostale =>
            distributionPostalesSerializer(distributionPostale)
    ),
});

export const fetchEntityResultSerializer = (
    rawResult: IFetchEntityResultDto
): IFetchEntityResult =>
    rawResult.map(rawEntity => entitySerializer(rawEntity));
