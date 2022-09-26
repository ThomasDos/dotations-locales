import { Tab, Tabs } from "@dataesr/react-dsfr";
import { SubHeader } from "components/dashboard";
import HistoriqueTab from "components/historique";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
    width: "100%";
    padding: 56px 80px 120px 120px;
`;

const StyledInfoDate = styled.div`
    width: 100%;
`;

const StyledSpanMaj = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const StyledMajHours = styled.div`
    border-top: solid 1px var(--blue-france-925);
    padding-top: 16px;
    margin-top: 16px;
`;

const StyledTabs = styled(Tabs)<{ dotationsNonEligibles: number[] }>`
    ul {
        align-items: center !important;
    }
    &::before {
        height: 1px;
    }
    ${({ dotationsNonEligibles }) =>
        dotationsNonEligibles.map((dotationNonEligible: number) => {
            return `li:nth-child(${dotationNonEligible}) {
        button {
            background: var(--grey-950);
            color: var(--grey-625-425);
            &:hover{
                background: var(--grey-850)
            }
        }
    }`;
        })}

    padding: 0 32px !important;
`;

const StyledTab = styled(Tab)`
    padding: 0 !important;
    border-bottom: 1px solid var(--blue-france-850);
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

    return (
        <>
            <SubHeader commune={commune} codeInsee={codeInsee} />
            <StyledDashboardBody>
                <>
                    <StyledInfoDate className="px-8 py-4 mb-10 flex flex-col">
                        <div className="flex justify-between">
                            <span className="text-3xl font-bold">
                                Dotations pour {currentYear}
                            </span>
                            <DropdownMenuDownload />
                        </div>
                        <StyledMajHours className="flex items-center justify-end">
                            <StyledSpanMaj className="mr-1 text-sm">
                                Mise à jour hier à 08h45
                            </StyledSpanMaj>
                            <div>
                                <Image
                                    src="/icons/clock.svg"
                                    height="16px"
                                    width="16px"
                                    layout="fixed"
                                    alt="icone horloge"
                                />
                            </div>
                        </StyledMajHours>
                    </StyledInfoDate>

                    <StyledTabs
                        dotationsNonEligibles={tabIndexDotationsNonEligibles}
                    >
                        {/*@ts-ignore*/}
                        <StyledTab label="Résumé">
                            <HistoriqueTab dotation={dotationDGF} />
                        </StyledTab>

                        {Object.keys(dotationsByAmountDescending).map(
                            (dotationKey: string) => {
                                const dotation =
                                    dotationsByAmountDescending[dotationKey];
                                return (
                                    <StyledTab
                                        //@ts-ignore
                                        label={dotation.label}
                                        key={dotation.title}
                                    >
                                        <HistoriqueTab dotation={dotation} />
                                    </StyledTab>
                                );
                            }
                        )}
                    </StyledTabs>
                </>
            </StyledDashboardBody>
        </>
    );
};

export default HistoriquePage;
