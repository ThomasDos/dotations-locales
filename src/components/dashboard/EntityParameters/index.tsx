import { Button, LabelPercentage } from "components/ui";
import type { Criteres } from "models/commune/commune.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import getDotationPerHabitant from "utils/getDotationPerHabitant";

import ParameterRow from "./ParameterRow";

const EntityParametersContainer = styled.div`
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
}

const EntityParameters = ({
    criteres,
    currentYearTotal,
    currentYear,
    lastYear,
    lastYearTotal,
}: EntityParametersProps) => {
    const router = useRouter();

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
        <EntityParametersContainer>
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
                <div>
                    <Link
                        href={{
                            pathname: "/[codeInsee]/Simulation",
                            query: { ...router.query },
                        }}
                    >
                        <div>
                            <Button
                                icon="calculator"
                                text="Créer une simulation"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </EntityParametersContainer>
    );
};

export default EntityParameters;
