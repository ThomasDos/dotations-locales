import { LabelText } from "components/ui";
import type { Critere } from "models/commune/commune.interface";

import Value from "./Value";

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
    const initialCurrentYear =
        initialCritereGeneral.annees[0][new Date().getFullYear()];
    const currentYear = critereGeneral.annees[0][new Date().getFullYear()];

    const valueIsModified = initialCurrentYear.valeur !== currentYear.valeur;

    return (
        <>
            <hr />
            <div className="flex justify-between my-3 text-sm items-center">
                <div className="flex items-center">
                    <span className="text-start">
                        {critereGeneral.description}
                    </span>
                    {valueIsModified && (
                        <div className="ml-1">
                            <LabelText
                                text="SIMU"
                                backgroundColor="var(--grey-975)"
                                color="#FC5D00"
                                borderColor="#FC5D00"
                            />
                        </div>
                    )}
                </div>
                <Value
                    currentYear={currentYear}
                    isSimulation={isSimulation}
                    critereGeneralKey={critereGeneralKey}
                    initialCurrentYear={initialCurrentYear}
                    valueIsModified={valueIsModified}
                />
            </div>
        </>
    );
};

export default ParameterRow;
