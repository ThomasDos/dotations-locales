import { Button, LabelPercentage } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import type { Criteres } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import {
    selectFeaturesSimulation,
    selectIsCommune,
    selectIsSimulation,
} from "store/appSettings.slice";
import {
    selectCurrentYearTotal,
    selectInitialCriteresGenerauxIsEmpty,
    selectInitialEntity,
    selectLastYearTotal,
} from "store/initialEntity.slice";
import {
    selectCurrentYearCriteres,
    selectLastYearCriteres,
    selectSimulationEntity,
    selectSimulationIsDifferentThanInitial,
} from "store/simulationEntity.slice";
import styled from "styled-components";
import getPercentageEvolution from "utils/getPercentageEvolution";

import getDotationPerHabitantPopulationDgf from "utils/getDotationPerHabitantPopulationDgf";
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
    const simulationEntity = useSelector(selectSimulationEntity);
    const currentYearTotal = useSelector(selectCurrentYearTotal);
    const lastYearTotal = useSelector(selectLastYearTotal);
    const initialEntity = useSelector(selectInitialEntity);
    const isSimulation = useSelector(selectIsSimulation);
    const isCommune = useSelector(selectIsCommune);
    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const currentYearCriteres = useSelector(selectCurrentYearCriteres);
    const lastYearCriteres = useSelector(selectLastYearCriteres);

    const featuresSimulation = useSelector(selectFeaturesSimulation);

    const isInitialCriteresGenerauxEmpty = useSelector(
        selectInitialCriteresGenerauxIsEmpty
    );

    if (isInitialCriteresGenerauxEmpty) return null;

    const { criteresGeneraux: initialCriteresGeneraux } = initialEntity as {
        criteresGeneraux: Criteres;
    };
    const { criteresGeneraux } = isSimulation
        ? (simulationEntity as { criteresGeneraux: Criteres })
        : (initialEntity as { criteresGeneraux: Criteres });

    const criteresGenerauxKeys = Object.keys(criteresGeneraux);

    const currentYearDotationPerHabitant = getDotationPerHabitantPopulationDgf(
        criteresGeneraux,
        currentYearCriteres,
        currentYearTotal
    );

    const lastYearDotationPerHabitant = getDotationPerHabitantPopulationDgf(
        criteresGeneraux,
        lastYearCriteres,
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
            <div className="sticky top-10 w-full">
                {(!isSimulation || simulationIsDifferentThanInitial) && (
                    <div className="text-center mb-10">
                        <span className="flex font-bold">
                            Synthèse {currentYearCriteres}
                        </span>
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
                <div className="w-full">
                    <div className="mb-4 flex justify-between items-center">
                        <span className="font-bold">
                            {isSimulation
                                ? "Critères généraux modifiables"
                                : `Critères généraux`}
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
                        {criteresGenerauxKeys.map(
                            (critereGeneralKey: string) => {
                                return (
                                    <ParameterRow
                                        key={critereGeneralKey}
                                        critereGeneralKey={critereGeneralKey}
                                        critereGeneral={
                                            criteresGeneraux[critereGeneralKey]
                                        }
                                        initialCritereGeneral={
                                            initialCriteresGeneraux[
                                                critereGeneralKey
                                            ]
                                        }
                                    />
                                );
                            }
                        )}
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
                        isCommune &&
                        featuresSimulation && (
                            <div>
                                {/*
                            TODO: réactiver quand business décidera
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
                            /> */}
                            </div>
                        )
                    )}
                </div>
            </div>
        </StyledEntityParameters>
    );
};

export default EntityParameters;
