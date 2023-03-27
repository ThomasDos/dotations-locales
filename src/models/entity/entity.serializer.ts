import {
    criteresMap,
    dotationsMap,
    sousDotationsMap,
} from "constants/dotationsMap";
import _ from "lodash";
import convertSnakeCaseToCamelCase from "utils/convertSnakeCaseToCamelCase";

import type {
    Criteres,
    CriteresDto,
    Dotations,
    DotationsDto,
    Entity,
    EntityAnnee,
    EntityDto,
    SousDotations,
    SousDotationsDto,
} from "./entity.interface";

export const fetchEntitySerializer = (rawResult: EntityDto): Entity => ({
    annees: anneesSerializer(rawResult.dotations),
    code: rawResult.code,
    criteresGeneraux: criteresSerializer(rawResult.criteres_generaux),
    dotations: dotationSerializer(rawResult.dotations),
    partDotationRrf: rawResult.part_dotation_rrf,
});

export const anneesSerializer = (dotations: DotationsDto): EntityAnnee => {
    const [firstDotation] = Object.keys(dotations);
    return dotations[firstDotation].annees.map(annee => Object.keys(annee)[0]);
};

export const criteresSerializer = (rawCriteres: CriteresDto): Criteres => {
    if (_.isEmpty(rawCriteres)) return {};
    const rawCriteresKeys = Object.keys(rawCriteres);

    const newObjectCriteres: Criteres = {};
    rawCriteresKeys.forEach((key: string) => {
        if (!rawCriteres[key]) return;

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
        if (!dotationsMap[keyCamelCase]) return;

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
