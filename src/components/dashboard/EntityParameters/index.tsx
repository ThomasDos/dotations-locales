import { Button, LabelPercentage } from "components/ui";
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
import getDotationPerHabitant from "utils/getDotationPerHabitant";

import ParameterRow from "./ParameterRow";

const StyledEntityParameters = styled.div`
    width: 25%;
    background: var(--grey-975-75);
    z-index: 1;
    padding: 56px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EntityParameters = () => {
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

    const currentYearDotationPerHabitant = getDotationPerHabitant(
        criteresGeneraux,
        currentYear,
        currentYearTotal
    );

    const lastYearDotationPerHabitant = getDotationPerHabitant(
        criteresGeneraux,
        lastYear,
        lastYearTotal
    );

    const percentageEvolution = Number(
        (
            (currentYearDotationPerHabitant / lastYearDotationPerHabitant - 1) *
            100
        ).toFixed(2)
    );

    return (
        <StyledEntityParameters>
            <div className="w-full text-center sticky top-16">
                <div className="mb-6">
                    <span className="font-bold">
                        {isSimulation
                            ? "Données modifiables"
                            : "Données connues de votre commune"}
                    </span>
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
                {!isSimulation && (
                    <div>
                        <Button
                            icon="calculator"
                            text="Créer une simulation"
                            onClick={() => {
                                matomoTrackEvent([
                                    "dashboard",
                                    "fonction",
                                    "simulation",
                                    "button",
                                ]);

                                dispatch(updateIsSimulationTrue());
                            }}
                        />
                    </div>
                )}

                {(!isSimulation || simulationIsDifferentThanInitial) && (
                    <div>
                        <span className="flex font-bold mt-10">Synthèse</span>
                        <div className="bg-white rounded-lg py-4 px-16 my-6">
                            <span className="text-sm">Dotation / habitant</span>
                            <div className="flex justify-center mt-2">
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
