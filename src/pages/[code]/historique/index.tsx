import { SubHeader } from "components/dashboard";
import HistoriqueTab from "components/historique";
import { BaseCalculLoi, Spinner, Tab, Tabs } from "components/ui";
import useDataEntityInit from "hooks/useDataEntityInit";
import { Dotation } from "models/entity/entity.interface";
import { historiqueSerializer } from "models/historique/historique.serializer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
    selectInitialAnnees,
    selectInitialDotations,
} from "store/initialEntity.slice";
import { selectCurrentYear } from "store/simulationEntity.slice";
import styled from "styled-components";
import getTabIndexDotationsNonEligibles from "utils/getTabIndexDotationsNonEligibles";
import getTotalDotations from "utils/getTotalDotations";
import sortDotationsByAmountDescending from "utils/sortDotationsByAmountDescending";

const StyledDashboardBody = styled.div`
    width: 100%;
    padding: 0 16px;
    @media (min-width: 940px) {
        padding: 56px 80px 60px 120px;
    }
`;

const HistoriquePage = () => {
    const router = useRouter();
    const { libelle, code } = router.query as {
        libelle: string;
        code: string;
    };

    const dotations = useSelector(selectInitialDotations);
    const currentYear = useSelector(selectCurrentYear);
    const annees = useSelector(selectInitialAnnees);

    const { showSpinner } = useDataEntityInit(code);

    const dotationsByAmountDescending = sortDotationsByAmountDescending(
        dotations,
        currentYear
    );
    const tabIndexDotationsNonEligibles = getTabIndexDotationsNonEligibles(
        dotationsByAmountDescending,
        currentYear
    );

    const anneesDotationsTotal = annees.map((annee: string) => {
        const yearTotal = getTotalDotations(dotations, annee);
        return { [annee]: yearTotal };
    });

    const dotationDGF: Dotation = {
        annees: anneesDotationsTotal,
        criteres: {},
        description: "",
        label: "Résumé",
        title: "Dotation Globale de Fonctionnement (DGF)",
        key: "",
    };

    const historiqueData = historiqueSerializer(dotationDGF);

    const anneesLength = historiqueData.length;

    if (showSpinner) {
        return (
            <>
                <Head>
                    <title>L&apos;historique de votre dotation</title>
                </Head>
                <SubHeader libelle={libelle} code={code} />
                <div className="w-auto my-40 flex justify-center">
                    <Spinner size="md" />
                </div>
            </>
        );
    }
    return (
        <>
            <Head>
                <title>L&apos;historique de votre dotation</title>
            </Head>
            <SubHeader libelle={libelle} code={code} />
            <span className="sm:hidden px-4 py-3 mb-6 flex items-center">
                Historique sur {anneesLength} an
                {anneesLength > 1 && "s"}
            </span>
            <StyledDashboardBody>
                <>
                    <div className="w-full px-8 py-4 mb-10 flex-col hidden sm:flex">
                        <div className="flex justify-between">
                            <span className="text-3xl font-bold">
                                Dotations pour {currentYear}
                            </span>
                        </div>
                        <BaseCalculLoi />
                    </div>

                    <Tabs dotationsNonEligibles={tabIndexDotationsNonEligibles}>
                        {/*@ts-ignore*/}
                        <Tab label="Résumé">
                            <HistoriqueTab dotation={dotationDGF} />
                        </Tab>

                        {Object.keys(dotationsByAmountDescending).map(
                            (dotationKey: string) => {
                                const dotation =
                                    dotationsByAmountDescending[dotationKey];
                                return (
                                    //@ts-ignore
                                    <Tab
                                        key={dotation.title}
                                        label={dotation.label}
                                    >
                                        <HistoriqueTab dotation={dotation} />
                                    </Tab>
                                );
                            }
                        )}
                    </Tabs>
                </>
            </StyledDashboardBody>
        </>
    );
};

export default HistoriquePage;
