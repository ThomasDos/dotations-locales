import convertSnakeCaseToCamelCase from "utils/convertSnakeCaseToCamelCase";
import {
    InitData,
    InitDataDto,
    InitEntity,
    InitEntityDto,
    InitNationalFichiers,
    InitNationalFichiersDto,
} from "./init.interface";

export const fetchInitSerializer = (data: InitDataDto): InitData => {
    if (!data) return {} as InitData;

    const {
        sources_donnees,
        base_calcul,
        derniere_maj_donnees,
        simulation_periodes,
    } = data;

    return {
        sourcesDonnees: {
            commune: initEntitySerializer(sources_donnees.commune),
            epci: initEntitySerializer(sources_donnees.epci),
            departement: initEntitySerializer(sources_donnees.departement),
        },
        baseCalcul: base_calcul,
        derniereMajDonnees: derniere_maj_donnees,
        simulationPeriodes: simulation_periodes,
    };
};

export function initEntitySerializer(
    rawInitEntity: InitEntityDto | null
): InitEntity | null {
    if (!rawInitEntity) return null;
    const rawInitEntityKeys = Object.keys(rawInitEntity);
    const newObjectEntity: InitEntity = {};
    rawInitEntityKeys.forEach((key: string) => {
        const keyCamelCase = convertSnakeCaseToCamelCase(key);

        const fichiers = rawInitEntity[key].fichiers;
        const liensExternes = rawInitEntity[key].liens_externes;
        if (!fichiers) {
            return (newObjectEntity[keyCamelCase] = {
                fichiers: null,
                liensExternes,
            });
        }

        newObjectEntity[keyCamelCase] = {
            fichiers: {
                nationalCriteres: initNationalFichiersSerializer(
                    fichiers.national_criteres
                ),
                nationalMontants: initNationalFichiersSerializer(
                    fichiers.national_montants
                ),
                sousDotations:
                    fichiers.sous_dotations &&
                    fichiers.sous_dotations.map(initEntitySerializer),
            },
            liensExternes,
        };
    });

    return newObjectEntity;
}

function initNationalFichiersSerializer(
    rawInitNationalFichiers: InitNationalFichiersDto | null
): InitNationalFichiers | null {
    if (!rawInitNationalFichiers) return null;
    return {
        label: rawInitNationalFichiers.label,
        nomFichier: rawInitNationalFichiers.nom_fichier,
    };
}
