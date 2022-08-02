import type { Critere } from "models/commune/commune.interface";

import Value from "./Value";

interface EntityRowProps {
    critere: Critere;
}

const ParameterRow = ({ critere }: EntityRowProps) => {
    const currentYear = critere.annees[0][new Date().getFullYear()];

    return (
        <>
            <hr />
            <div className="flex justify-between my-3 text-sm">
                <span className="text-start">{critere.description}</span>
                <Value currentYear={currentYear} />
            </div>
        </>
    );
};

export default ParameterRow;
