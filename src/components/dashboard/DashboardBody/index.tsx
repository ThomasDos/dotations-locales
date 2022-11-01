import { BaseCalculLoi, Tab, Tabs } from "components/ui";
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
                <div className="w-full sm:px-8 sm:py-4 my-6 sm:mb-10 flex flex-col">
                    <div className="hidden sm:flex justify-between">
                        <span className="text-3xl font-bold">
                            Dotations pour {currentYear}
                        </span>
                        <DropdownMenuDownload />
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <BaseCalculLoi />
                        <div
                            className="flex flex-1 sm:hidden justify-end"
                            onClick={() => {
                                setDisplayMobileCriteresGeneraux(true);
                            }}
                        >
                            <Image
                                src="/icons/settings-mobile.svg"
                                alt="Configuration des critères généraux"
                                width={48}
                                height={48}
                            />
                        </div>
                    </div>
                </div>

                <Tabs dotationsNonEligibles={tabIndexDotationsNonEligibles}>
                    {/*@ts-ignore*/}
                    <Tab label="Résumé">
                        <MainTab dotations={dotations} />
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
                                    <SubTab dotation={dotation} />
                                </Tab>
                            );
                        }
                    )}
                </Tabs>
            </>
        </StyledDashboardBody>
    );
};

export default DashboardBody;
