import { Button, LabelPercentage } from "components/ui";
import type { Criteres } from "models/commune/commune.interface";
import type { Dispatch, SetStateAction } from "react";
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

interface EntityParametersProps {
    criteres: Criteres;
    currentYearTotal: number;
    currentYear: string;
    lastYear: string;
    lastYearTotal: number;
    isSimulation: boolean;
    setIsSimulation: Dispatch<SetStateAction<boolean>>;
}

const EntityParameters = ({
    criteres,
    currentYearTotal,
    currentYear,
    lastYear,
    lastYearTotal,
    isSimulation,
    setIsSimulation,
}: EntityParametersProps) => {
    const criteresKeys = Object.keys(criteres);

    const currentYearDotationPerHabitant = getDotationPerHabitant(
        criteres,
        currentYear,
        currentYearTotal
    );
    const lastYearDotationPerHabitant = getDotationPerHabitant(
        criteres,
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
                        Données connues de votre commune
                    </span>
                </div>
                <div>
                    {criteresKeys.map((critereKey: string) => {
                        return (
                            <ParameterRow
                                key={critereKey}
                                critere={criteres[critereKey]}
                            />
                        );
                    })}
                </div>
                <span className="flex font-bold mt-10">Synthèse</span>
                <div className="bg-white rounded-lg py-4 px-16 my-6">
                    <span className="text-sm">Dotation / habitant</span>
                    <div className="flex justify-center mt-2">
                        <span className="font-bold text-xl mr-2">
                            {currentYearDotationPerHabitant.toFixed(2)}€
                        </span>
                        <LabelPercentage percentage={percentageEvolution} />
                    </div>
                </div>
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
