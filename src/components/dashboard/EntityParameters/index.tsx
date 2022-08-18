import { Button, LabelPercentage } from "components/ui";
import type { Commune, Criteres } from "models/commune/commune.interface";
import type { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { selectSimulationCommune } from "store/simulationCommune/simulationCommune.slice";
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
    currentYearTotal: number;
    currentYear: string;
    lastYear: string;
    lastYearTotal: number;
    isSimulation: boolean;
    setIsSimulation: Dispatch<SetStateAction<boolean>>;
    fetchCommuneData: Commune | undefined;
}

const EntityParameters = ({
    currentYearTotal,
    currentYear,
    lastYear,
    lastYearTotal,
    isSimulation,
    setIsSimulation,
    fetchCommuneData,
}: EntityParametersProps) => {
    const simulationCommune = useSelector(selectSimulationCommune);

    const { criteres: initialCriteres } = fetchCommuneData as {
        criteres: Criteres;
    };
    const { criteres } = isSimulation
        ? (simulationCommune as { criteres: Criteres })
        : (fetchCommuneData as { criteres: Criteres });

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
                                critereKey={critereKey}
                                critere={criteres[critereKey]}
                                initialCritere={initialCriteres[critereKey]}
                                isSimulation={isSimulation}
                            />
                        );
                    })}
                </div>
                <span className="flex font-bold mt-10">Synthèse</span>
                <div className="bg-white rounded-lg py-4 px-16 my-6">
                    <span className="text-sm">Dotation / habitant</span>
                    <div className="flex justify-center mt-2">
                        <span className="font-bold text-xl mr-2">
                            {Math.round(currentYearDotationPerHabitant)}€
                        </span>
                        {!!percentageEvolution && (
                            <LabelPercentage percentage={percentageEvolution} />
                        )}
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
