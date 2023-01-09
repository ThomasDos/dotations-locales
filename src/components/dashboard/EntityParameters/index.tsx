import { Button, LabelPercentage } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import _ from "lodash";
import type { Criteres } from "models/commune/commune.interface";
import { useDispatch, useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import {
    selectIsSimulation,
    updateIsSimulationTrue,
} from "store/appSettings.slice";
import {
    selectCurrentYearTotal,
    selectInitialCommune,
    selectLastYearTotal,
} from "store/initialCommune.slice";
import {
    selectCurrentYear,
    selectLastYear,
    selectSimulationCommune,
    selectSimulationIsDifferentThanInitial,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import getDotationPerHabitantPopulationInsee from "utils/getDotationPerHabitantPopulationInsee";
import getPercentageEvolution from "utils/getPercentageEvolution";

import ParameterRow from "./ParameterRow";

const StyledEntityParameters = styled.div<{
    displayMobileCriteresGeneraux: boolean;
}>`
    display: ${({ displayMobileCriteresGeneraux }) =>
        displayMobileCriteresGeneraux ? "block" : "none"};
    z-index: 1;
    flex-direction: column;
    align-items: center;
    background: var(--grey-975);
    width: 100%;
    padding: 32px 16px;

    @media (min-width: 768px) {
        padding: 32px;
        width: 30%;
        display: flex;
    }
    @media (min-width: 940px) {
        padding: 56px 40px;
        width: 25%;
    }
`;

interface EntityParametersProps {
    setIsCriteresGenerauxSimulation: (
        isCriteresGenerauxSimulation: boolean
    ) => void;
    displayMobileCriteresGeneraux: boolean;
    setDisplayMobileCriteresGeneraux: (displayMobile: boolean) => void;
}

const EntityParameters = ({
    setIsCriteresGenerauxSimulation,
    displayMobileCriteresGeneraux,
    setDisplayMobileCriteresGeneraux,
}: EntityParametersProps) => {
    const dispatch = useDispatch();
    const simulationCommune = useSelector(selectSimulationCommune);
    const currentYearTotal = useSelector(selectCurrentYearTotal);
    const lastYearTotal = useSelector(selectLastYearTotal);
    const initialCommune = useSelector(selectInitialCommune);
    const isSimulation = useSelector(selectIsSimulation);
    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);

    if (_.isEmpty(initialCommune.criteresGeneraux)) return null;

    const { criteresGeneraux: initialCriteresGeneraux } = initialCommune as {
        criteresGeneraux: Criteres;
    };
    const { criteresGeneraux } = isSimulation
        ? (simulationCommune as { criteresGeneraux: Criteres })
        : (initialCommune as { criteresGeneraux: Criteres });

    const criteresGenerauxKeys = Object.keys(criteresGeneraux);

    const currentYearDotationPerHabitant =
        getDotationPerHabitantPopulationInsee(
            criteresGeneraux,
            currentYear,
            currentYearTotal
        );

    const lastYearDotationPerHabitant = getDotationPerHabitantPopulationInsee(
        criteresGeneraux,
        lastYear,
        lastYearTotal
    );

    const percentageEvolution = getPercentageEvolution(
        currentYearDotationPerHabitant,
        lastYearDotationPerHabitant
    );

    return (
        <StyledEntityParameters
            displayMobileCriteresGeneraux={displayMobileCriteresGeneraux}
        >
            <div className="w-full sticky top-16">
                <div className="mb-4 flex justify-between items-center">
                    <span className="font-bold">
                        {isSimulation
                            ? "Données modifiables"
                            : "Données connues de votre commune"}
                    </span>

                    <ImageFixed
                        src="/icons/cross-filled.svg"
                        height={48}
                        width={48}
                        alt="Icone de croix pour fermer les critères généraux"
                        className="md:hidden"
                        onClick={() => {
                            setDisplayMobileCriteresGeneraux(false);
                        }}
                    />
                </div>
                <div>
                    {criteresGenerauxKeys.map((critereGeneralKey: string) => {
                        return (
                            <ParameterRow
                                key={critereGeneralKey}
                                critereGeneralKey={critereGeneralKey}
                                critereGeneral={
                                    criteresGeneraux[critereGeneralKey]
                                }
                                initialCritereGeneral={
                                    initialCriteresGeneraux[critereGeneralKey]
                                }
                            />
                        );
                    })}
                </div>
                {isSimulation ? (
                    <div>
                        <Button
                            text="Modifier les données"
                            onClick={() => {
                                matomoTrackEvent([
                                    "Simulation",
                                    "Modifier les données",
                                ]);
                                setIsCriteresGenerauxSimulation(true);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        <Button
                            icon="calculator"
                            text="Créer une simulation"
                            onClick={() => {
                                matomoTrackEvent([
                                    "Simulation",
                                    "Créer une simulation",
                                ]);

                                dispatch(updateIsSimulationTrue());
                            }}
                        />
                    </div>
                )}

                {(!isSimulation || simulationIsDifferentThanInitial) && (
                    <div className="text-center">
                        <span className="flex font-bold mt-10">Synthèse</span>
                        <div className="bg-white rounded-lg py-4 px-16 my-6">
                            <span className="text-sm">
                                Dotation (DGF) / habitant
                            </span>
                            <div className="flex justify-center mt-2 items-center">
                                <span className="font-bold text-xl mr-2">
                                    {Math.round(currentYearDotationPerHabitant)}
                                    €
                                </span>
                                {!!percentageEvolution && (
                                    <LabelPercentage
                                        percentage={percentageEvolution}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </StyledEntityParameters>
    );
};

export default EntityParameters;
