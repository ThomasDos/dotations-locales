import {
    criteresMap,
    dotationsMap,
    sousDotationsMap,
} from "constants/communeMap";
import _ from "lodash";
import convertSnakeCaseToCamelCase from "utils/convertSnakeCaseToCamelCase";

import type {
    Commune,
    CommuneAnnee,
    CommuneDto,
    Criteres,
    CriteresDto,
    Dotations,
    DotationsDto,
    SousDotations,
    SousDotationsDto,
} from "./commune.interface";

export const fetchCommuneSerializer = (rawResult: CommuneDto): Commune => ({
    annees: anneesSerializer(rawResult.dotations),
    codeInsee: rawResult.code_insee,
    criteresGeneraux: criteresSerializer(rawResult.criteres_generaux),
    dotations: dotationSerializer(rawResult.dotations),
});

export const anneesSerializer = (dotations: DotationsDto): CommuneAnnee => {
    const [firstDotation] = Object.keys(dotations);

    return dotations[firstDotation].annees.map(annee => Object.keys(annee)[0]);
};

export const criteresSerializer = (rawCriteres: CriteresDto): Criteres => {
    if (_.isEmpty(rawCriteres)) return {};
    const rawCriteresKeys = Object.keys(rawCriteres);

    const newObjectCriteres: Criteres = {};
    rawCriteresKeys.forEach((key: string) => {
        const keyCamelCase = convertSnakeCaseToCamelCase(key);

        newObjectCriteres[keyCamelCase] = {
            ...rawCriteres[key],
            description: criteresMap[keyCamelCase],
        };
    });

    return newObjectCriteres;
};

export const dotationSerializer = (rawDotations: DotationsDto): Dotations => {
    const rawDotationsKeys = Object.keys(rawDotations);

    const newObjectDotations: Dotations = {};
    rawDotationsKeys.forEach((key: string) => {
        const keyCamelCase = convertSnakeCaseToCamelCase(key);

        newObjectDotations[keyCamelCase] = {
            key: dotationsMap[keyCamelCase].key,
            annees: rawDotations[key].annees,
            criteres: criteresSerializer(rawDotations[key].criteres),
            description: dotationsMap[keyCamelCase].description,
            label: dotationsMap[keyCamelCase].label,
            title: dotationsMap[keyCamelCase].title,
            info: dotationsMap[keyCamelCase].info,
            links: dotationsMap[keyCamelCase].links,

            ...(rawDotations[key].sous_dotations && {
                sousDotations: sousDotationsSerializer(
                    rawDotations[key].sous_dotations
                ),
            }),
        };
    });

    return newObjectDotations;
};

export const sousDotationsSerializer = (
    rawSousDotations: SousDotationsDto | undefined
): SousDotations => {
    if (!rawSousDotations) return [];
    return rawSousDotations.map((sousDotation: DotationsDto) => {
        const rawSousDotationsKeys = Object.keys(sousDotation);

        const newObjectSousDotations: Dotations = {};
        rawSousDotationsKeys.forEach((key: string) => {
            const keyCamelCase = convertSnakeCaseToCamelCase(key);

            newObjectSousDotations[keyCamelCase] = {
                ...sousDotation[key],
                key: sousDotationsMap[keyCamelCase].key,
                criteres: criteresSerializer(sousDotation[key].criteres),
                description: sousDotationsMap[keyCamelCase].description,
                label: sousDotationsMap[keyCamelCase].label,
                title: sousDotationsMap[keyCamelCase].title,
                info: sousDotationsMap[keyCamelCase].info,
            };
        });
        return newObjectSousDotations;
    });
};
