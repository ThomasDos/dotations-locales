import { LabelText } from "components/ui";
import type { Critere } from "models/commune/commune.interface";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsSimulation } from "store/appSettings.slice";
import { selectInitialCurrentYear } from "store/initialCommune.slice";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationCommune.slice";
import styled from "styled-components";

import ModalParameterSimulation from "./ModalParameterSimulation";
import Value from "./Value";

const StyledParameterRowContainer = styled.div<{ isSimulation: boolean }>`
    background: ${({ isSimulation }) =>
        isSimulation ? "var(--grey-1000)" : ""};
    padding: 16px 20px;
`;
interface EntityRowProps {
    critereGeneral: Critere;
    initialCritereGeneral: Critere;
    critereGeneralKey: string;
}

const ParameterRow = ({
    critereGeneral,
    critereGeneralKey,
    initialCritereGeneral,
}: EntityRowProps) => {
    const [showModal, setShowModal] = useState(false);
    const isSimulation = useSelector(selectIsSimulation);
    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);
    const initialCurrentYear = useSelector(selectInitialCurrentYear);

    const currentYearCritereGeneralSimulation =
        critereGeneral.annees[0][currentYear];
    const currentYearCritereGeneralInitial =
        initialCritereGeneral.annees[0][initialCurrentYear];
    const { valeur: lastYearValeur } = critereGeneral.annees[1][lastYear];

    const valueIsModified = useMemo(
        () =>
            currentYearCritereGeneralSimulation.valeur !=
            currentYearCritereGeneralInitial.valeur,
        [
            currentYearCritereGeneralSimulation.valeur,
            currentYearCritereGeneralInitial.valeur,
        ]
    );

    if (currentYearCritereGeneralSimulation.valeur === "Non") return null;

    return (
        <>
            <hr />
            <StyledParameterRowContainer isSimulation={isSimulation}>
                <div className="flex justify-between my-3 text-sm items-center">
                    <div className="flex items-center">
                        <span className="text-start">
                            {critereGeneral.description}
                        </span>
                        <div className="ml-1">
                            {valueIsModified && (
                                <LabelText
                                    text="SIMU"
                                    backgroundColor="#FFE8E5"
                                    color="#FC5D00"
                                />
                            )}
                        </div>
                    </div>
                    <Value
                        currentYearCritereGeneralSimulation={
                            currentYearCritereGeneralSimulation
                        }
                        lastYearValeur={lastYearValeur}
                    />
                </div>
            </StyledParameterRowContainer>
            <ModalParameterSimulation
                currentYearCritereGeneralInitial={
                    currentYearCritereGeneralInitial
                }
                showModal={showModal}
                setShowModal={setShowModal}
                currentYearCritereGeneralSimulation={
                    currentYearCritereGeneralSimulation
                }
                critereGeneralKey={critereGeneralKey}
                description={critereGeneral.description}
            />
        </>
    );
};

export default ParameterRow;
