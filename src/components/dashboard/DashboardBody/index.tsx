import { BaseCalculLoi, Tab, Tabs } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import _ from "lodash";
import { useSelector } from "react-redux";
import { selectIsSimulation } from "store/appSettings.slice";
import {
    selectInitialCriteresGenerauxIsEmpty,
    selectInitialDotations,
} from "store/initialEntity.slice";
import {
    selectCurrentYear,
    selectSimulationDotations,
} from "store/simulationEntity.slice";
import styled from "styled-components";
import getTabIndexDotationsNonEligibles from "utils/getTabIndexDotationsNonEligibles";
import sortDotationsByAmountDescending from "utils/sortDotationsByAmountDescending";

import SimulationWarning from "components/simulation/SimulationWarning";
import MainTab from "./MainTab";
import SubTab from "./SubTab";
import MajLoi from "./SubTab/MajLoi";

const StyledDashboardBody = styled.div<{
    displayMobileCriteresGeneraux: boolean;
    initialCriteresGenerauxIsEmpty: boolean;
}>`
    display: ${({ displayMobileCriteresGeneraux }) =>
        displayMobileCriteresGeneraux ? "none" : "block"};
    width: 100%;
    padding: 24px 16px 16px;
    @media (min-width: 768px) {
        display: block;
        width: ${({ initialCriteresGenerauxIsEmpty }) =>
            !initialCriteresGenerauxIsEmpty && "70%"};
    }
    @media (min-width: 940px) {
        padding: 56px 80px 60px 120px;
        width: ${({ initialCriteresGenerauxIsEmpty }) =>
            !initialCriteresGenerauxIsEmpty && "76%"};
    }
`;

const StyledInfosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 4;
    align-items: center;
    @media (min-width: 768px) {
        width: 100%;
        border-top: solid 1px var(--blue-france-925);
        padding-top: 16px;
        margin-top: 16px;
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
    const initialCriteresGenerauxIsEmpty = useSelector(
        selectInitialCriteresGenerauxIsEmpty
    );
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
            initialCriteresGenerauxIsEmpty={initialCriteresGenerauxIsEmpty}
        >
            <>
                <div className="w-full mb-6 md:mb-10 flex flex-col">
                    <div className="hidden md:flex justify-between">
                        <span className="text-3xl font-bold">
                            {isSimulation
                                ? "Simulation des dotations"
                                : `Dotations pour ${currentYear}`}
                        </span>
                    </div>
                    <div className="flex w-full items-end justify-between">
                        <StyledInfosContainer>
                            <BaseCalculLoi />
                            <MajLoi />
                        </StyledInfosContainer>
                        <ImageFixed
                            className="flex flex-1 md:hidden justify-end"
                            width={48}
                            height={48}
                            alt="Configuration des critères généraux"
                            src="/icons/settings-mobile.svg"
                            onClick={() => {
                                setDisplayMobileCriteresGeneraux(true);
                            }}
                        />
                    </div>
                </div>

                {isSimulation && <SimulationWarning />}

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
                                //@ts-ignore
                                <Tab
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
