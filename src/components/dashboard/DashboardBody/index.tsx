import { Tab, Tabs } from "@dataesr/react-dsfr";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectInitialDotations } from "store/initialCommune.slice";
import styled from "styled-components";

import MainTab from "./MainTab";
import SubTab from "./SubTab";

const StyledDashboardBody = styled.div`
    width: 75%;
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

const StyledTabs = styled(Tabs)`
    ul {
        align-items: center !important;
    }
    &::before {
        height: 1px;
    }
    padding: 0 32px !important;
`;

const StyledTab = styled(Tab)`
    padding: 0 !important;
`;
const StyledWarningMessage = styled.div`
    background-color: var(--green-tilleul-verveine-975);
    padding: 16px 32px;
    margin: 40px;
`;

interface DashboardBodyProps {
    isSimulation: boolean;
}

const DashboardBody = ({ isSimulation }: DashboardBodyProps) => {
    const dotations = useSelector(selectInitialDotations);
    if (_.isEmpty(dotations)) return null;
    const {
        dotationForfaitaire,
        dotationSolidariteRurale,
        dotationNationalePerequation,
        dsuMontant,
    } = dotations;

    const currentYear = new Date().getFullYear();
    const lastYear = new Date().getFullYear() - 1;
    return (
        <StyledDashboardBody>
            <>
                {isSimulation ? (
                    <StyledWarningMessage>
                        👋 Message lorem ipsum dolores
                    </StyledWarningMessage>
                ) : (
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
                )}

                <StyledTabs>
                    {/*@ts-ignore*/}
                    <StyledTab label="Résumé">
                        <MainTab
                            currentYear={currentYear}
                            lastYear={lastYear}
                        />
                    </StyledTab>

                    {/*@ts-ignore*/}
                    <StyledTab label="DF">
                        <SubTab dotation={dotationForfaitaire} />
                    </StyledTab>

                    {/*@ts-ignore*/}
                    <StyledTab label="DSR">
                        <SubTab dotation={dotationSolidariteRurale} />
                    </StyledTab>

                    {/*@ts-ignore*/}
                    <StyledTab label="DNP">
                        <SubTab dotation={dotationNationalePerequation} />
                    </StyledTab>
                    {/*@ts-ignore*/}
                    <StyledTab label="DSU">
                        <SubTab dotation={dsuMontant} />
                    </StyledTab>
                </StyledTabs>
            </>
        </StyledDashboardBody>
    );
};

export default DashboardBody;
