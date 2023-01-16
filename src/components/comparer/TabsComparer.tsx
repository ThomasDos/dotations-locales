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
import TabComparer from "./TabComparer";

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
        description: "Dotations (DGF) par habitants",
        label: "Résumé",
        title: "Dotations Générales de Fonctionnement (DGF)",
    };

    return (
        <div className="mt-10">
            <Tabs dotationsNonEligibles={tabIndexDotationsNonEligibles}>
                {/*@ts-ignore*/}
                <Tab label="Résumé">
                    <TabComparer
                        dotation={dotationDGF}
                        title="Dotations Générales de Fonctionnement (DGF)"
                        subtitle={`Comparaison ${currentYear}`}
                        isDGF
                    />
                </Tab>

                {Object.keys(dotationsByAmountDescending).map(
                    (dotationKey: string) => {
                        const dotation =
                            dotationsByAmountDescending[dotationKey];
                        return (
                            //@ts-ignore
                            <Tab label={dotation.label} key={dotation.title}>
                                <TabComparer
                                    dotation={dotation}
                                    title={dotation.title}
                                    subtitle={`Comparaison ${currentYear}`}
                                />

                                {dotation.sousDotations?.map(sousDotation => {
                                    const [sousDotationKey] =
                                        Object.keys(sousDotation);

                                    const currentSousDotation =
                                        sousDotation[sousDotationKey];
                                    return (
                                        <TabComparer
                                            key={currentSousDotation.title}
                                            dotation={currentSousDotation}
                                            title={currentSousDotation.title}
                                            subtitle={`Comparaison ${currentYear}`}
                                            isSousDotation
                                            sousDotationKey={sousDotationKey}
                                        />
                                    );
                                })}
                            </Tab>
                        );
                    }
                )}
            </Tabs>
        </div>
    );
};

export default TabsContainerComparer;
