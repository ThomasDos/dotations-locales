import { Button } from "components/ui";
import { useState } from "react";
import styled from "styled-components";

import RadioGroupContainer from "./RadioGroupContainer";

const SpanTitleStyled = styled.h3`
    all: unset;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 16px;
`;

interface CriteresGenerauxSimulationProps {
    setIsCriteresGenerauxSimulation: (
        isCriteresGenerauxSimulation: boolean
    ) => void;
}

export default function CriteresGenerauxSimulation({
    setIsCriteresGenerauxSimulation,
}: CriteresGenerauxSimulationProps) {
    //TODO: remplacer en valeur dynamique back
    const radioButtonLawAvailable = ["2021", "2022"];

    const [selectLoiSimulation, setSelectLoiSimulation] = useState(
        radioButtonLawAvailable.length === 1 ? radioButtonLawAvailable[0] : ""
    );

    return (
        <div className="py-14 flex flex-col w-5/12 m-auto">
            <div className="flex flex-col mb-20">
                <SpanTitleStyled>1. Simuler avec :</SpanTitleStyled>
                <RadioGroupContainer
                    radioButtonLawAvailable={radioButtonLawAvailable}
                    selectLoiSimulation={selectLoiSimulation}
                    setSelectLoiSimulation={setSelectLoiSimulation}
                />
            </div>

            <div className="flex flex-col">
                <div className="flex">
                    <SpanTitleStyled className="mb-4">
                        2.modifier les données
                    </SpanTitleStyled>
                    <div>Mode avancée</div>
                </div>
                <div>TABLEAU</div>
            </div>

            <div className="max-w-xs self-center">
                <Button
                    text="Estimer mes dotations"
                    onClick={() => {
                        setIsCriteresGenerauxSimulation(false);
                    }}
                />
            </div>
        </div>
    );
}
