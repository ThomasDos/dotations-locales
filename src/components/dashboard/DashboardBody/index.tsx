import { Tab, Tabs } from "@dataesr/react-dsfr";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import type { Dotations } from "models/commune/commune.interface";
import Image from "next/image";
import styled from "styled-components";

import MainTab from "./MainTab";
import SubTab from "./SubTab";

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
    return (
        <DashboardBodyContainer>
            <>
                <InfoDateContainer className="px-8 py-4 mb-10 flex flex-col">
                    <div className="flex justify-between">
                        <span className="text-3xl font-bold">
                            Dotations pour {currentYear}
                        </span>
                        <DropdownMenuDownload />
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
                        <MainTab
                            currentYear={currentYear}
                            currentYearTotal={currentYearTotal}
                            lastYear={lastYear}
                            lastYearTotal={lastYearTotal}
                            dotations={dotations}
                        />
                    </Tab>

                    {/*@ts-ignore*/}
                    <Tab index={2} activeTab={1} label="DF">
                        <SubTab dotation={dotations.dotationForfaitaire} />
                    </Tab>

                    {/*@ts-ignore*/}
                    <Tab index={3} activeTab={1} label="DSR">
                        <SubTab dotation={dotations.dotationSolidariteRurale} />
                    </Tab>

                    {/*@ts-ignore*/}
                    <Tab index={4} activeTab={1} label="DNP">
                        <SubTab
                            dotation={dotations.dotationNationalePerequation}
                        />
                    </Tab>
                </Tabs>
            </>
        </DashboardBodyContainer>
    );
};

export default DashboardBody;
