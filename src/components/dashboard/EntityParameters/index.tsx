import type { SelectChangeEvent } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { Button, LabelPercentage } from "components/ui";
import _ from "lodash";
import type { Criteres } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
    selectCurrentYearTotal,
    selectInitialCommune,
    selectLastYearTotal,
} from "store/initialCommune.slice";
import {
    selectSimulationCommune,
    selectSimulationIsDifferentThanInitial,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import getDotationPerHabitant from "utils/getDotationPerHabitant";

import ParameterRow from "./ParameterRow";

const StyledSelect = styled(Select)`
    background: var(--grey-1000);
    border-bottom: solid 2px #3a3a3a;
`;

const StyledEntityParameters = styled.div`
    width: 25%;
    background: var(--grey-975-75);
    z-index: 1;
    padding: 56px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledSpanSelect = styled.span`
    font-family: Marianne;
    line-height: 24px;
    letter-spacing: 0em;
`;

interface EntityParametersProps {
    isSimulation: boolean;
    setIsSimulation: (isSimulation: boolean) => void;
}

//TODO: remove by dynamic value
const mockedSimulerAvec = [
    "Projet de Loi de Finance 2023",
    "Projet de Loi de Finance 2022",
    "Projet de Loi de Finance 2021",
];

const EntityParameters = ({
    isSimulation,
    setIsSimulation,
}: EntityParametersProps) => {
    const simulationCommune = useSelector(selectSimulationCommune);
    const currentYearTotal = useSelector(selectCurrentYearTotal);
    const lastYearTotal = useSelector(selectLastYearTotal);
    const initialCommune = useSelector(selectInitialCommune);
    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const [selectedLaw, setSelectedLaw] = useState<string>(
        mockedSimulerAvec[0]
    );

    const currentYear = new Date().getFullYear();
    const lastYear = new Date().getFullYear() - 1;

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

    const handleSelectChange = (event: SelectChangeEvent) => {
        setSelectedLaw(event.target.value);
    };

    return (
        <StyledEntityParameters>
            <div className="w-full text-center sticky top-16">
                {isSimulation ? (
                    <div className="mb-8">
                        <span className="font-bold">Simuler avec :</span>
                        <div className="mt-4">
                            <StyledSelect
                                value={selectedLaw}
                                onChange={e => {
                                    handleSelectChange(e as SelectChangeEvent);
                                }}
                            >
                                {mockedSimulerAvec.map((data: string) => {
                                    return (
                                        <MenuItem value={data} key={data}>
                                            <StyledSpanSelect>
                                                {data}
                                            </StyledSpanSelect>
                                        </MenuItem>
                                    );
                                })}
                            </StyledSelect>
                        </div>
                    </div>
                ) : null}
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
                                isSimulation={isSimulation}
                            />
                        );
                    })}
                </div>
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
                {!isSimulation && (
                    <div>
                        <Button
                            icon="calculator"
                            text="Créer une simulation"
                            onClick={() => {
                                setIsSimulation(true);
                            }}
                        />
                    </div>
                )}
            </div>
        </StyledEntityParameters>
    );
};

export default EntityParameters;
