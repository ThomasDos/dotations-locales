import convertSnakeCaseToCamelCase from "utils/convertSnakeCaseToCamelCase";
import {
    InitData,
    InitDataDto,
    InitEntity,
    InitEntityDto,
    InitNationalFichiers,
    InitNationalFichiersDto,
} from "./init.interface";

export const fetchInitSerializer = (rawInitResult: InitDataDto): InitData => ({
    commune: initEntitySerializer(rawInitResult.commune),
    epci: initEntitySerializer(rawInitResult.epci),
    departement: initEntitySerializer(rawInitResult.departement),
});

const initEntitySerializer = (rawInitEntity: InitEntityDto): InitEntity => {
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
