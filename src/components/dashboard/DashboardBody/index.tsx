import { Tab, Tabs } from "@dataesr/react-dsfr";
import type { Dotation, Dotations } from "models/commune/commune.interface";
import Image from "next/image";
import styled from "styled-components";

import DotationCard from "./DotationCard";
import SubtitleDotations from "./SubtitleDotations";

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
    const dotationsKeys = Object.keys(dotations);
    const countEligibleDotations = dotationsKeys.length;

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

                        <SubtitleDotations
                            countEligibleDotations={countEligibleDotations}
                        />
                        {dotationsKeys.map((dotationKey, index) => {
                            return (
                                <DotationCard
                                    key={dotationKey}
                                    hasInformation={false}
                                    dotation={dotations[dotationKey]}
                                    borderTop={index === 0}
                                />
                            );
                        })}
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
