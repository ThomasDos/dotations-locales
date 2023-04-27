import convertSnakeCaseToCamelCase from "utils/convertSnakeCaseToCamelCase";
import {
    InitData,
    InitDataDto,
    InitEntity,
    InitEntityDto,
    InitNationalFichiers,
    InitNationalFichiersDto,
} from "./init.interface";

export const fetchInitSerializer = ({
    sources_donnees,
    base_calcul,
    derniere_maj_donnees,
    simulation_periodes,
}: InitDataDto): InitData => ({
    sourcesDonnees: {
        commune: initEntitySerializer(sources_donnees?.commune),
        epci: initEntitySerializer(sources_donnees?.epci),
        departement: initEntitySerializer(sources_donnees?.departement),
    },
    baseCalcul: base_calcul,
    derniereMajDonnees: derniere_maj_donnees,
    simulationPeriodes: simulation_periodes,
});

const initEntitySerializer = (rawInitEntity: InitEntityDto): InitEntity => {
    if (!rawInitEntity) return {} as InitEntity;
    const rawInitEntityKeys = Object.keys(rawInitEntity);

    const newObjectEntity: InitEntity = {};
    rawInitEntityKeys.forEach((key: string) => {
        if (!rawInitEntity[key]) return;

        const keyCamelCase = convertSnakeCaseToCamelCase(key);

        newObjectEntity[keyCamelCase] = {
            nationalCriteres: initNationalFichiersSerializer(
                rawInitEntity[key].national_criteres
            ),
            nationalMontants: initNationalFichiersSerializer(
                rawInitEntity[key].national_montants
            ),
            sousDotations: initSousDotationsSerializer(
                rawInitEntity[key].sous_dotations
            ),
        };
    });

    return newObjectEntity;
};

const initNationalFichiersSerializer = (
    rawInitNationalFichiers: InitNationalFichiersDto | null
): InitNationalFichiers | null => {
    if (!rawInitNationalFichiers) return null;
    return {
        label: rawInitNationalFichiers.label,
        nomFichier: rawInitNationalFichiers.nom_fichier,
    };
};

const initSousDotationsSerializer = (
    rawInitSousDotations: InitEntityDto[] | null
): InitEntity[] | null => {
    if (!rawInitSousDotations) return null;
    return rawInitSousDotations.map((sousDotation: InitEntityDto) => {
        const rawSousDotationsKeys = Object.keys(sousDotation);

        const newObjectSousDotations: InitEntity = {};
        rawSousDotationsKeys.forEach((key: string) => {
            if (!sousDotation[key]) return;

            const keyCamelCase = convertSnakeCaseToCamelCase(key);

            newObjectSousDotations[keyCamelCase] = {
                nationalCriteres: initNationalFichiersSerializer(
                    sousDotation[key].national_criteres
                ),
                nationalMontants: initNationalFichiersSerializer(
                    sousDotation[key].national_montants
                ),
                sousDotations: null,
            };
        });

        return newObjectSousDotations;
    });
};
