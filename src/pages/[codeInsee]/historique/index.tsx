import { SubHeader } from "components/dashboard";
import HistoriqueTab from "components/historique";
import { BaseCalculLoi, Tab, Tabs } from "components/ui";
import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import { historiqueSerializer } from "models/historique/historique.serializer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import {
    selectInitialAnnees,
    selectInitialDotations,
} from "store/initialCommune.slice";
import { selectCurrentYear } from "store/simulationCommune.slice";
import styled from "styled-components";
import getTabIndexDotationsNonEligibles from "utils/getTabIndexDotationsNonEligibles";
import getTotalDotations from "utils/getTotalDotations";
import sortDotationsByAmountDescending from "utils/sortDotationsByAmountDescending";

const StyledDashboardBody = styled.div`
    width: 100%;
    padding: 0 16px;
    @media (min-width: 940px) {
        padding: 56px 80px 120px 120px;
    }
`;

const HistoriquePage = () => {
    const router = useRouter();
    const { commune, codeInsee } = router.query as {
        commune: string;
        codeInsee: string;
    };

    const dotations = useSelector(selectInitialDotations);
    const currentYear = useSelector(selectCurrentYear);
    const annees = useSelector(selectInitialAnnees);

    useEffect(() => {
        if (_.isEmpty(dotations)) {
            void router.push(`/${codeInsee}?commune=${commune}`);
        }
    }, [dotations, codeInsee, commune, router]);

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
        title: "Dotations Générales de Fonctionnement (DGF)",
    };

    const historiqueData = useMemo(
        () => historiqueSerializer(dotationDGF),
        [dotationDGF]
    );

    const anneesLength = historiqueData.length;

    return (
        <>
            <Head>
                <title>L&apos;historique de votre dotation</title>
            </Head>
            <SubHeader commune={commune} codeInsee={codeInsee} />
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
                                    <Tab
                                        //@ts-ignore
                                        label={dotation.label}
                                        key={dotation.title}
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
