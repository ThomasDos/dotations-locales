import { Dotation, Dotations } from "models/entity/entity.interface";
import { EntitiesComparer } from "store/entitiesComparer.slice";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getDotationPerHabitantPopulationInsee from "utils/getDotationPerHabitantPopulationInsee";
import getPopulationDgf from "utils/getPopulationDgf";
import getPopulationInsee from "utils/getPopulationInsee";
import getTotalDotations from "utils/getTotalDotations";
import { DotationsFormattedBoardDgfComparer } from "./comparer.interface";

export const dotationsChartComparerSerializer = (
    entities: EntitiesComparer,
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
    entities: EntitiesComparer,
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

export const dotationDgfChartSerializer = (
    entities: EntitiesComparer,
    year: string
) =>
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
    entities: EntitiesComparer,
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
    entities: EntitiesComparer,
    year: string
) =>
    entities.map(({ libelle, code, criteresGeneraux, dotations }) => {
        const populationInsee = +getPopulationInsee(criteresGeneraux, year);
        const dotationsDf = dotations.dotationForfaitaire;
        const populationDgf = +getPopulationDgf(dotationsDf.criteres, year);
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
    entities: EntitiesComparer,
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
