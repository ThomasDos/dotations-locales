import { Tab, Tabs } from "components/ui";
import { Dotation } from "models/commune/commune.interface";
import { useSelector } from "react-redux";
import {
    selectInitialAnnees,
    selectInitialDotations,
} from "store/initialCommune.slice";
import { selectCurrentYear } from "store/simulationCommune.slice";
import getTabIndexDotationsNonEligibles from "utils/getTabIndexDotationsNonEligibles";
import getTotalDotations from "utils/getTotalDotations";
import sortDotationsByAmountDescending from "utils/sortDotationsByAmountDescending";
import BarChartComparer from "./BarChartComparer";

const TabsContainerComparer = () => {
    const dotations = useSelector(selectInitialDotations);
    const currentYear = useSelector(selectCurrentYear);
    const annees = useSelector(selectInitialAnnees);

    const anneesDotationsTotal = annees.map((annee: string) => {
        const yearTotal = getTotalDotations(dotations, annee);
        return { [annee]: yearTotal };
    });

    const dotationsByAmountDescending = sortDotationsByAmountDescending(
        dotations,
        currentYear
    );

    const tabIndexDotationsNonEligibles = getTabIndexDotationsNonEligibles(
        dotationsByAmountDescending,
        currentYear
    );

    const dotationDGF: Dotation = {
        annees: anneesDotationsTotal,
        criteres: {},
        description: "",
        label: "Résumé",
        title: "Dotations Générales de Fonctionnement (DGF)",
    };

    const mockedDotations = [
        {
            currentDotationTitle: "Montreuil (80829)",
            label: "10000000 €",
            value: 10000000,
        },
        {
            barTitle: "Second (12345)",
            label: "500000 €",
            value: 5000000,
        },

        {
            barTitle: "Third (12213)",
            label: "15 000 000 €",
            value: 15000000,
        },
    ];

    return (
        <div className="mt-10">
            <Tabs dotationsNonEligibles={tabIndexDotationsNonEligibles}>
                {/*@ts-ignore*/}
                <Tab label="Résumé">
                    <BarChartComparer
                        dotations={mockedDotations}
                        title="Dotations Générales de Fonctionnement (DGF)"
                        subtitle={`Comparaison ${currentYear}`}
                    />
                </Tab>

                {Object.keys(dotationsByAmountDescending).map(
                    (dotationKey: string) => {
                        const dotation =
                            dotationsByAmountDescending[dotationKey];
                        return (
                            <Tab
                                //@ts-ignore
                                label={dotation.label}
                                key={dotation.title}
                            >
                                <BarChartComparer
                                    dotations={mockedDotations}
                                    title={dotation.title}
                                    subtitle={`Comparaison ${currentYear}`}
                                />
                            </Tab>
                        );
                    }
                )}
            </Tabs>
        </div>
    );
};

export default TabsContainerComparer;
