import { Tab, Tabs } from "@dataesr/react-dsfr";
import { Collapse } from "@mui/material";
import type { Dotation, Dotations } from "models/commune/commune.interface";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import sortDotationsByAmount from "utils/sortDotationsEligiblesOrNonEligibles";

import DotationCard from "./DotationCard";
import TitleDotationsEligibles from "./TitleDotationsEligibles";
import TitleDotationsNonEligibles from "./TitleDotationsNonEligibles";

const DashboardBodyContainer = styled.div`
    width: 75%;
    padding: 56px 80px 120px 120px;
`;

const InfoDateContainer = styled.div`
    width: 100%;
`;

const SpanMajContainer = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const SpanExport = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const MajHoursContainer = styled.div`
    border-top: solid 1px var(--blue-france-925);
    padding-top: 16px;
    margin-top: 16px;
`;

interface DashboardBodyProps {
    dotations: Dotations;
    currentYear: number;
    currentYearTotal: number;
    lastYear: number;
    lastYearTotal: number;
}

const DashboardBody = ({
    dotations,
    currentYear,
    currentYearTotal,
    lastYear,
    lastYearTotal,
}: DashboardBodyProps) => {
    const [showNonEligible, setShowNonEligible] = useState(false);

    const { dotationsEligibles, dotationsNonEligibles } =
        sortDotationsByAmount(dotations);
    const dotationsEligiblesKeys = Object.keys(dotationsEligibles);
    const dotationsNonEligiblesKeys = Object.keys(dotationsNonEligibles);

    const countDotationsEligiblesDotations = dotationsEligiblesKeys.length;
    const countDotationsNonEligiblesDotations =
        dotationsNonEligiblesKeys.length;

    const dotationDGF: Dotation = {
        annees: [
            { [currentYear]: currentYearTotal },
            { [lastYear]: lastYearTotal },
        ],
        description: "Evolution de votre montant total de dotations",
        title: "Dotations Générales de Fonctionnement (DGF)",
    };
    return (
        <DashboardBodyContainer>
            <>
                <InfoDateContainer className="px-8 py-4 mb-10 flex flex-col">
                    <div className="flex justify-between">
                        <span className="text-3xl font-bold">
                            Dotations pour {currentYear}
                        </span>
                        <div className="flex text-sm items-center cursor-pointer">
                            <div className="flex mr-1">
                                <Image
                                    src="/icons/file-download.svg"
                                    width="16px"
                                    height="16px"
                                    alt="icone exporter"
                                />
                            </div>
                            <SpanExport>Exporter</SpanExport>
                        </div>
                    </div>
                    <MajHoursContainer className="flex items-center justify-end">
                        <SpanMajContainer className="mr-1 text-sm">
                            Mise à jour hier à 08h45
                        </SpanMajContainer>
                        <Image
                            src="/icons/clock.svg"
                            height="16px"
                            width="16px"
                            layout="fixed"
                            alt="icone horloge"
                        />
                    </MajHoursContainer>
                </InfoDateContainer>

                <Tabs>
                    {/*@ts-ignore*/}
                    <Tab index={1} activeTab={1} label="Résumé">
                        <DotationCard
                            hasInformation={false}
                            dotation={dotationDGF}
                            borderTop
                        />
                        {countDotationsEligiblesDotations ? (
                            <>
                                <TitleDotationsEligibles
                                    countEligibleDotations={
                                        countDotationsEligiblesDotations
                                    }
                                />
                                {dotationsEligiblesKeys.map(
                                    (dotationEligibleKey, index) => {
                                        return (
                                            <DotationCard
                                                key={dotationEligibleKey}
                                                hasInformation={false}
                                                dotation={
                                                    dotationsEligibles[
                                                        dotationEligibleKey
                                                    ]
                                                }
                                                borderTop={index === 0}
                                            />
                                        );
                                    }
                                )}
                            </>
                        ) : null}

                        {countDotationsNonEligiblesDotations ? (
                            <>
                                <TitleDotationsNonEligibles
                                    countNonEligibleDotations={
                                        countDotationsNonEligiblesDotations
                                    }
                                    setShowNonEligible={setShowNonEligible}
                                    showNonEligible={showNonEligible}
                                />
                                <Collapse in={showNonEligible}>
                                    {dotationsNonEligiblesKeys.map(
                                        (dotationNonEligibleKey, index) => {
                                            return (
                                                <DotationCard
                                                    key={dotationNonEligibleKey}
                                                    hasInformation={false}
                                                    dotation={
                                                        dotationsNonEligibles[
                                                            dotationNonEligibleKey
                                                        ]
                                                    }
                                                    borderTop={index === 0}
                                                />
                                            );
                                        }
                                    )}
                                </Collapse>
                            </>
                        ) : null}
                    </Tab>

                    {/*@ts-ignore*/}
                    <Tab index={2} activeTab={1} label="DF">
                        <h3>DF</h3>
                        <p>En construction...</p>
                    </Tab>

                    {/*@ts-ignore*/}
                    <Tab index={3} activeTab={1} label="DSR">
                        <h3>DSR</h3>
                        <p>En construction...</p>
                    </Tab>

                    {/*@ts-ignore*/}
                    <Tab index={4} activeTab={1} label="DNP">
                        <h3>DNP</h3>
                        <p>En construction...</p>
                    </Tab>
                </Tabs>
            </>
        </DashboardBodyContainer>
    );
};

export default DashboardBody;
