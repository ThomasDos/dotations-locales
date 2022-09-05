import { LabelText } from "components/ui";
import type { Critere } from "models/commune/commune.interface";
import { useMemo, useState } from "react";
import styled from "styled-components";

import ModalParameterSimulation from "./ModalParameterSimulation";
import Value from "./Value";

const StyledSpanSimulation = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #fc5d00;
    text-decoration: underline;
`;

const StyledParameterRowContainer = styled.div`
    background: white;
    padding: 16px 20px;
`;
interface EntityRowProps {
    critereGeneral: Critere;
    initialCritereGeneral: Critere;
    isSimulation: boolean;
    critereGeneralKey: string;
}

const ParameterRow = ({
    critereGeneral,
    critereGeneralKey,
    initialCritereGeneral,
    isSimulation,
}: EntityRowProps) => {
    const [showModal, setShowModal] = useState(false);
    const initialCurrentYear =
        initialCritereGeneral.annees[0][new Date().getFullYear()];
    const { valeur: initialLastYear } =
        initialCritereGeneral.annees[1][new Date().getFullYear() - 1];
    const currentYear = critereGeneral.annees[0][new Date().getFullYear()];

    const valueIsModified = useMemo(
        () => initialCurrentYear.valeur != currentYear.valeur,
        [initialCurrentYear.valeur, currentYear.valeur]
    );

    const valeurToNumber = Number(currentYear.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);

    if (initialCurrentYear.valeur === "Non") return null;

    return (
        <>
            <hr />
            <StyledParameterRowContainer>
                <div className="flex justify-between my-3 text-sm items-center">
                    <div className="flex items-center">
                        <span className="text-start">
                            {critereGeneral.description}
                        </span>
                    </div>
                    <Value
                        currentYear={currentYear}
                        initialLastYear={initialLastYear}
                    />
                </div>
                {isSimulation && (
                    <div
                        className="flex items-center mr-1 cursor-pointer justify-between"
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        <div className="ml-1">
                            {valueIsModified && (
                                <LabelText
                                    text="SIMU"
                                    backgroundColor="var(--grey-975)"
                                    color="#FC5D00"
                                    borderColor="#FC5D00"
                                />
                            )}
                        </div>
                        {!valeurIsNotNumber && (
                            <StyledSpanSimulation>
                                Modifier
                            </StyledSpanSimulation>
                        )}
                    </div>
                )}
            </StyledParameterRowContainer>
            <ModalParameterSimulation
                initialCurrentYear={initialCurrentYear}
                showModal={showModal}
                setShowModal={setShowModal}
                currentYear={currentYear}
                critereGeneralKey={critereGeneralKey}
            />
        </>
    );
};

export default ParameterRow;
