import type { Critere } from "models/commune/commune.interface";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

interface EntityRowProps {
    critere: Critere;
}

const ParameterRow = ({ critere }: EntityRowProps) => {
    const currentYear = critere.annees[0][new Date().getFullYear()];
    // const lastYear = critere.annees[1][new Date().getFullYear() - 1];
    const valeurToNumber = Number(currentYear.valeur);

    return (
        <>
            <hr />
            <div className="flex justify-between my-3 text-sm">
                <span className="text-start">{critere.description}</span>
                <span className="font-bold text-end">
                    {isNaN(valeurToNumber)
                        ? currentYear.valeur
                        : formatNumberWithSpace(
                              Math.round(Number(currentYear.valeur))
                          )}
                    {currentYear.unite && " " + currentYear.unite}
                </span>
            </div>
        </>
    );
};

export default ParameterRow;
