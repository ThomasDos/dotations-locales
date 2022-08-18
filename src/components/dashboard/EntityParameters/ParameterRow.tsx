import { LabelText } from "components/ui";
import type { Critere } from "models/commune/commune.interface";

import Value from "./Value";

interface EntityRowProps {
    critere: Critere;
    initialCritere: Critere;
    isSimulation: boolean;
    critereKey: string;
}

const ParameterRow = ({
    critere,
    critereKey,
    initialCritere,
    isSimulation,
}: EntityRowProps) => {
    const initialCurrentYear =
        initialCritere.annees[0][new Date().getFullYear()];
    const currentYear = critere.annees[0][new Date().getFullYear()];

    const valueIsModified = initialCurrentYear.valeur !== currentYear.valeur;

    return (
        <>
            <hr />
            <div className="flex justify-between my-3 text-sm items-center">
                <div className="flex items-center">
                    <span className="text-start">{critere.description}</span>
                    {valueIsModified && (
                        <div className="ml-1">
                            <LabelText
                                text="SIMU"
                                backgroundColor="#F6F6F6"
                                color="#FC5D00"
                                borderColor="#FC5D00"
                            />
                        </div>
                    )}
                </div>
                <Value
                    currentYear={currentYear}
                    isSimulation={isSimulation}
                    critere={critere}
                    critereKey={critereKey}
                    initialCurrentYear={initialCurrentYear}
                />
            </div>
        </>
    );
};

export default ParameterRow;
