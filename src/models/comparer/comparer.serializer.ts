import type { Dotation } from "models/commune/commune.interface";
import { CommunesComparer } from "store/communesComparer.slice";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getDotationPerHabitant from "utils/getDotationPerHabitant";
import getTotalDotations from "utils/getTotalDotations";

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

export const dotationDgfPerHabitantChartSerializer = (
    communes: CommunesComparer,
    year: string
) =>
    communes
        .map(({ commune, codeInsee, dotations, criteresGeneraux }, index) => {
            const totalDotations = getTotalDotations(dotations, year);
            const value = getDotationPerHabitant(
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
            };
        })
        .filter(Boolean);
