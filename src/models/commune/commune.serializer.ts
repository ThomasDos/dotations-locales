import {
    criteresMap,
    dotationsMap,
    sousDotationsMap,
} from "constants/communeMap";
import _ from "lodash";
import convertSnakeCaseToCamelCase from "utils/convertSnakeCaseToCamelCase";

import type {
    Commune,
    CommuneDto,
    Criteres,
    CriteresDto,
    Dotations,
    DotationsDto,
    SousDotations,
    SousDotationsDto,
} from "./commune.interface";

export const fetchCommuneSerializer = (rawResult: CommuneDto): Commune => ({
    codeInsee: rawResult.code_insee,
    criteresGeneraux: criteresSerializer(rawResult.criteres_generaux),
    dotations: dotationSerializer(rawResult.dotations),
});

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
            annees: rawDotations[key].annees,
            criteres: criteresSerializer(rawDotations[key].criteres),
            description: dotationsMap[keyCamelCase].description,
            title: dotationsMap[keyCamelCase].title,

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
                criteres: criteresSerializer(sousDotation[key].criteres),
                description: sousDotationsMap[keyCamelCase].description,
                title: sousDotationsMap[keyCamelCase].title,
            };
        });
        return newObjectSousDotations;
    });
};
