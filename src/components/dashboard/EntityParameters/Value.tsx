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
    const valeurIsLabel = valeur === "Non" || valeur === "Oui";
    let percentageEvolution = 0;
    if (!valeurIsNotNumber && valeur != 0) {
        percentageEvolution = getPercentageEvolution(
            valeur as number,
            lastYearValeur as number
        );
    }

    return valeurIsLabel ? (
        valeur === "Oui" ? (
            <Badge text="Oui" type="success" hasIcon />
        ) : (
            <LabelGreyCustomCrossIcon text="Non" />
        )
    ) : (
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
