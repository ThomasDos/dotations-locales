import { Tab, Tabs } from "@dataesr/react-dsfr";
import { BaseCalculLoi } from "components/ui";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectIsSimulation } from "store/appSettings.slice";
import { selectInitialDotations } from "store/initialCommune.slice";
import {
    selectCurrentYear,
    selectSimulationDotations,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import getTabIndexDotationsNonEligibles from "utils/getTabIndexDotationsNonEligibles";
import sortDotationsByAmountDescending from "utils/sortDotationsByAmountDescending";

import MainTab from "./MainTab";
import SubTab from "./SubTab";

const StyledDashboardBody = styled.div<{
    displayMobileCriteresGeneraux: boolean;
}>`
    display: ${({ displayMobileCriteresGeneraux }) =>
        displayMobileCriteresGeneraux ? "none" : "block"};
    width: 100%;
    padding: 0 16px;
    @media (min-width: 640px) {
        display: block;
        width: 70%;
    }
    @media (min-width: 940px) {
        padding: 56px 80px 120px 120px;
        width: 75%;
    }
`;

const StyledInfoDate = styled.div`
    width: 100%;
`;

const StyledTabs = styled(Tabs)<{ dotationsNonEligibles: number[] }>`
    ul {
        align-items: center !important;
    }
    &::before {
        height: 1px;
    }
    @media (max-width: 480px) {
        button {
            padding: 12px !important;
        }
    }
    @media (max-width: 420px) {
        button {
            padding: 10px !important;
        }
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

    @media (min-width: 640px) {
        padding: 0 32px !important;
    }
`;

const StyledTab = styled(Tab)`
    padding: 0 !important;
    border-bottom: 1px solid var(--blue-france-850);
`;

interface DashboardBodyProps {
    setDisplayMobileCriteresGeneraux: (displayMobile: boolean) => void;
    displayMobileCriteresGeneraux: boolean;
}

const DashboardBody = ({
    setDisplayMobileCriteresGeneraux,
    displayMobileCriteresGeneraux,
}: DashboardBodyProps) => {
    const isSimulation = useSelector(selectIsSimulation);
    const simulationDotations = useSelector(selectSimulationDotations);
    const initialDotations = useSelector(selectInitialDotations);
    const currentYear = useSelector(selectCurrentYear);
    const dotations = isSimulation ? simulationDotations : initialDotations;

    if (_.isEmpty(dotations)) return null;

    const dotationsByAmountDescending = sortDotationsByAmountDescending(
        dotations,
        currentYear
    );
    const tabIndexDotationsNonEligibles = getTabIndexDotationsNonEligibles(
        dotationsByAmountDescending,
        currentYear
    );

    return (
        <StyledDashboardBody
            displayMobileCriteresGeneraux={displayMobileCriteresGeneraux}
        >
            <>
                <StyledInfoDate className="sm:px-8 sm:py-4 my-6 sm:mb-10 flex flex-col">
                    <div className="hidden sm:flex justify-between">
                        <span className="text-3xl font-bold">
                            Dotations pour {currentYear}
                        </span>
                        <DropdownMenuDownload />
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <BaseCalculLoi />
                        <div
                            className="flex-1 sm:hidden text-end"
                            onClick={() => {
                                setDisplayMobileCriteresGeneraux(true);
                            }}
                        >
                            <Image
                                layout="fixed"
                                src="/icons/settings-mobile.svg"
                                alt="Configuration des critères généraux"
                                width="48px"
                                height="48px"
                            />
                        </div>
                    </div>
                </StyledInfoDate>

                <StyledTabs
                    dotationsNonEligibles={tabIndexDotationsNonEligibles}
                >
                    {/*@ts-ignore*/}
                    <StyledTab label="Résumé">
                        <MainTab dotations={dotations} />
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
                                    <SubTab dotation={dotation} />
                                </StyledTab>
                            );
                        }
                    )}
                </StyledTabs>
            </>
        </StyledDashboardBody>
    );
};

export default DashboardBody;
