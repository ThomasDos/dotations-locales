import { LabelText } from "components/ui";
import type { Critere } from "models/entity/entity.interface";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectInitialCurrentYear } from "store/initialEntity.slice";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationEntity.slice";

import ModalParameterSimulation from "./ModalParameterSimulation";
import Value from "./Value";

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
            <div className="flex md:flex-row justify-between my-3 text-sm items-center">
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
