import type { Dotation, Dotations } from "models/commune/commune.interface";
import { CommunesComparer } from "store/communesComparer.slice";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getDotationPerHabitantPopulationInsee from "utils/getDotationPerHabitantPopulationInsee";
import getPopulationDgf from "utils/getPopulationDgf";
import getPopulationInsee from "utils/getPopulationInsee";
import getTotalDotations from "utils/getTotalDotations";
import { DotationsFormattedBoardDgfComparer } from "./comparer.interface";

export const dotationsChartComparerSerializer = (
    communes: CommunesComparer,
    year: string,
    dotation: Dotation
) =>
    communes
        .map(({ commune, codeInsee, dotations }, index) => {
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
                    communeTitleMain: `${commune} (${codeInsee})`,
                };
            }
            return {
                value,
                label,
                communeTitle: `${commune} (${codeInsee})`,
            };
        })
        .filter(Boolean);

export const sousDotationsChartComparerSerializer = (
    communes: CommunesComparer,
    year: string,
    sousDotationKey: string
) =>
    communes
        .map(({ commune, codeInsee, dotations }, index) => {
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
                    communeTitleMain: `${commune} (${codeInsee})`,
                };
            }
            return {
                value,
                label,
                communeTitle: `${commune} (${codeInsee})`,
            };
        })
        .filter(Boolean);

export const dotationDgfChartSerializer = (
    communes: CommunesComparer,
    year: string
) =>
    communes
        .map(({ commune, codeInsee, dotations }, index) => {
            const value = getTotalDotations(dotations, year);
            const label = value
                ? `${formatNumberWithSpace(value)} €`
                : "Non elligible : 0€";

            if (!index) {
                return {
                    value,
                    label,
                    communeTitleMain: `${commune} (${codeInsee})`,
                };
            }
            return {
                value,
                label,
                communeTitle: `${commune} (${codeInsee})`,
            };
        })
        .filter(Boolean);

export const dotationsDgfBoardSerializer = (
    communes: CommunesComparer,
    year: string
): DotationsFormattedBoardDgfComparer =>
    communes
        .map(({ commune, codeInsee, dotations }) => {
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
                titleRow: `${commune} (${codeInsee})`,
            };
        })
        .filter(Boolean);
export const dotationsDgfBoardPopulationsSerializer = (
    communes: CommunesComparer,
    year: string
) =>
    communes.map(({ commune, codeInsee, criteresGeneraux, dotations }) => {
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
            titleRow: `${commune} (${codeInsee})`,
        };
    });

export const dotationDgfPerHabitantChartSerializer = (
    communes: CommunesComparer,
    year: string
) =>
    communes
        .map(({ commune, codeInsee, dotations, criteresGeneraux }, index) => {
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
                    communeTitleMain: `${commune} (${codeInsee})`,
                };
            }
            return {
                value,
                label,
                communeTitle: `${commune} (${codeInsee})`,
                link: `/${codeInsee}?commune=${commune}`,
            };
        })
        .filter(Boolean);
