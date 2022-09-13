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

    const valeurToNumber = Number(currentYearCritereGeneralSimulation.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);

    if (currentYearCritereGeneralSimulation.valeur === "Non") return null;

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
                        currentYearCritereGeneralSimulation={
                            currentYearCritereGeneralSimulation
                        }
                        lastYearValeur={lastYearValeur}
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
                            {valueIsModified ? (
                                <LabelText
                                    text="SIMU"
                                    backgroundColor="var(--grey-975)"
                                    color="#FC5D00"
                                    borderColor="#FC5D00"
                                />
                            ) : (
                                <LabelText
                                    text={currentYear}
                                    backgroundColor="var(--grey-950)"
                                    color="var(--grey-50)"
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
                currentYearCritereGeneralInitial={
                    currentYearCritereGeneralInitial
                }
                showModal={showModal}
                setShowModal={setShowModal}
                currentYearCritereGeneralSimulation={
                    currentYearCritereGeneralSimulation
                }
                critereGeneralKey={critereGeneralKey}
            />
        </>
    );
};

export default ParameterRow;
