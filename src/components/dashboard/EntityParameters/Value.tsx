import { Badge } from "@dataesr/react-dsfr";
import { LabelGreyCustomCrossIcon, TagData } from "components/ui";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

interface ValueProps {
    currentYearCritereGeneralSimulation: {
        unite: string | null;
        valeur: number | string;
    };

    lastYearValeur: number | string;
}

const Value = ({
    currentYearCritereGeneralSimulation,
    lastYearValeur,
}: ValueProps) => {
    const { valeur, unite } = currentYearCritereGeneralSimulation;
    const valeurToNumber = Number(currentYearCritereGeneralSimulation.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);
    let percentageEvolution;
    if (!valeurIsNotNumber && valeur != 0) {
        percentageEvolution = getPercentageEvolution(valeur, lastYearValeur);
    }

    if (valeurIsNotNumber) {
        if (valeur === "Oui") {
            return <Badge text="Oui" type="success" hasIcon />;
        }
        if (valeur === "Non") {
            return <LabelGreyCustomCrossIcon text="Non" />;
        }
        return <b>{valeur}</b>;
    }

    return (
        <div className="flex items-center whitespace-nowrap sm:ml-1">
            <span className="font-bold text-end">
                {Number(valeur) === 0 ? (
                    <span className="mr-2">{valeur}</span>
                ) : (
                    <TagData
                        valeur={`${formatNumberWithSpace(Number(valeur))} ${
                            unite ? " " + unite : ""
                        }`}
                        percentage={percentageEvolution}
                    />
                )}
            </span>
        </div>
    );
};

export default Value;
