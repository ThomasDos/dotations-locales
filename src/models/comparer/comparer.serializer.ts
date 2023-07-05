import { Dotation, Dotations } from "models/entity/entity.interface";
import { fetchEntitySerializer } from "models/entity/entity.serializer";
import { Entities } from "store/entitiesComparer.slice";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getDotationPerHabitantPopulationDgf from "utils/getDotationPerHabitantPopulationDgf";
import getDotationPerHabitantPopulationInsee from "utils/getDotationPerHabitantPopulationInsee";
import getPercentageEvolution from "utils/getPercentageEvolution";
import getPopulationDgf from "utils/getPopulationDgf";
import getPopulationInsee from "utils/getPopulationInsee";
import getStrateCurrentYear from "utils/getStrateCurrentYear";
import getTotalDotations from "utils/getTotalDotations";
import {
    DotationsEchelonFormated,
    DotationsFormattedBoardDgfComparer,
    EntitiesComparer,
    rawEntitiesComparer,
} from "./comparer.interface";

export const dotationsChartComparerSerializer = (
    entities: Entities,
    year: string,
    dotation: Dotation
) =>
    entities
        .map(({ libelle, code, dotations }, index) => {
            const dotationsKeys = Object.keys(dotations);
            const dotationSelectedKey = dotationsKeys.find(
                key => dotations[key].label === dotation.label
            );

            if (!dotationSelectedKey) {
                return;
            }

            const dotationSelected = dotations[dotationSelectedKey] as Dotation;

            const value = dotationSelected.annees[0][year];
            const label = value
                ? `${formatNumberWithSpace(value)} €`
                : "Non elligible : 0€";

            if (!index) {
                return {
                    value,
                    label,
                    entityTitleMain: `${libelle} (${code})`,
                };
            }
            return {
                value,
                label,
                entityTitle: `${libelle} (${code})`,
            };
        })
        .filter(Boolean);

export const sousDotationsChartComparerSerializer = (
    entities: Entities,
    year: string,
    sousDotationKey: string
) =>
    entities
        .map(({ libelle, code, dotations }, index) => {
            const dotationSelected: Dotations | undefined = dotations[
                "dotationSolidariteRurale"
            ].sousDotations?.find(
                sousDot => Object.keys(sousDot)[0] === sousDotationKey
            );

            if (!dotationSelected) return;
            const value = dotationSelected[sousDotationKey].annees[0][year];
            const label = value
                ? `${formatNumberWithSpace(value)} €`
                : "Non elligible : 0€";

            if (!index) {
                return {
                    value,
                    label,
                    entityTitleMain: `${libelle} (${code})`,
                };
            }
            return {
                value,
                label,
                entityTitle: `${libelle} (${code})`,
            };
        })
        .filter(Boolean);

export const dotationDgfChartSerializer = (entities: Entities, year: string) =>
    entities
        .map(({ libelle, code, dotations }, index) => {
            const value = getTotalDotations(dotations, year);
            const label = value
                ? `${formatNumberWithSpace(value)} €`
                : "Non elligible : 0€";

            if (!index) {
                return {
                    value,
                    label,
                    entityTitleMain: `${libelle} (${code})`,
                };
            }
            return {
                value,
                label,
                entityTitle: `${libelle} (${code})`,
            };
        })
        .filter(Boolean);

export const dotationsDgfBoardSerializer = (
    entities: Entities,
    year: string
): DotationsFormattedBoardDgfComparer =>
    entities
        .map(({ libelle, code, dotations }) => {
            const totalDotations = getTotalDotations(dotations, year);

            const dotationsKeys = Object.keys(dotations);

            const dotationsFormatted = dotationsKeys.map(
                (dotationKey: string) => {
                    const dotation = dotations[dotationKey];
                    const value = dotation.annees[0][year];

                    return {
                        value,
                        label: dotation.label,
                    };
                }
            );

            return {
                totalDotations,
                dotations: dotationsFormatted,
                titleRow: `${libelle} (${code})`,
            };
        })
        .filter(Boolean);
export const dotationsDgfBoardPopulationsSerializer = (
    entities: Entities,
    year: string,
    yearCriteres: string
) =>
    entities.map(({ libelle, code, criteresGeneraux, dotations }) => {
        const populationInsee = +getPopulationInsee(
            criteresGeneraux,
            yearCriteres
        );
        const populationDgf = +getPopulationDgf(criteresGeneraux, yearCriteres);
        const totalDotations = getTotalDotations(dotations, year);
        const totalDotationsFomatted = `${formatNumberWithSpace(
            totalDotations / 1000
        )}K€`;

        return {
            values: [populationInsee, populationDgf, totalDotationsFomatted],
            labels: ["Population INSEE", "Population DGF", "Montant DGF"],
            titleRow: `${libelle} (${code})`,
        };
    });

export const dotationDgfPerHabitantChartSerializer = (
    entities: Entities,
    year: string
) =>
    entities
        .map(({ libelle, code, dotations, criteresGeneraux }, index) => {
            const totalDotations = getTotalDotations(dotations, year);
            const value = getDotationPerHabitantPopulationInsee(
                criteresGeneraux,
                year,
                totalDotations
            );
            const label = value
                ? `${formatNumberWithSpace(value)} € / hab`
                : "Non elligible : 0€";

            if (!index) {
                return {
                    value,
                    label,
                    entityTitleMain: `${libelle} (${code})`,
                };
            }
            return {
                value,
                label,
                entityTitle: `${libelle} (${code})`,
                link: `/${code}?libelle=${libelle}`,
            };
        })
        .filter(Boolean);

export const entitiesComparerSerializer = (
    rawEntities: rawEntitiesComparer
): EntitiesComparer => {
    const rawEntitiesKeys = Object.keys(rawEntities);

    const entities: EntitiesComparer = {};

    rawEntitiesKeys.forEach(key => {
        entities[key] = rawEntities[key].map(fetchEntitySerializer);
    });

    return entities;
};

export const dotationsFormattedByTotalDotationsPopulationStrateEvolution = ({
    entities,
    currentYear,
    lastYear,
}: {
    entities: Entities;
    currentYear: string;
    lastYear: string;
}): DotationsEchelonFormated =>
    entities.map(entity => {
        const totalDotation = getTotalDotations(entity.dotations, currentYear);

        const totalDotationLastYear = getTotalDotations(
            entity.dotations,
            lastYear
        );

        const evolutionDotations = getPercentageEvolution(
            totalDotation,
            totalDotationLastYear
        );

        const dotationDgfPerHabitant = getDotationPerHabitantPopulationDgf(
            entity.criteresGeneraux,
            currentYear,
            totalDotation
        );

        const strate = getStrateCurrentYear(
            entity.criteresGeneraux,
            currentYear
        );

        return {
            libelle: entity.libelle as string,
            totalDotation,
            evolutionDotations,
            strate,
            dotationDgfPerHabitant,
            code: entity.code,
        };
    });
