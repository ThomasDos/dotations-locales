import { Badge } from "@dataesr/react-dsfr";
import { LabelGreyCustomCrossIcon, LabelPercentage } from "components/ui";
import { Critere } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationEntity.slice";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

interface ParameterCardValueProps {
    critere: Critere;
}

const ParameterCardValue = ({ critere }: ParameterCardValueProps) => {
    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);

    const currentYearCritere = critere.annees[0][currentYear];
    const lastYearCritere = critere.annees[1][lastYear];

    const { valeur: currentYearValeur, unite } = currentYearCritere;
    const lastYearValeur = lastYearCritere?.valeur;

    const valeurToNumber = Number(currentYearCritere.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);

    let percentageEvolution;

    if (valeurIsNotNumber) {
        if (currentYearValeur === "Oui") {
            return <Badge text="Oui" type="success" hasIcon />;
        }

        if (currentYearValeur === "Non") {
            return <LabelGreyCustomCrossIcon text="Non" />;
        }

        return <b>{currentYearValeur}</b>;
    }

    percentageEvolution = getPercentageEvolution(
        currentYearValeur,
        lastYearValeur
    );

    if (!Number(currentYearValeur)) {
        return <LabelGreyCustomCrossIcon text="Non applicable" />;
    }

    return (
        <LabelPercentage
            valeur={`${formatNumberWithSpace(Number(currentYearValeur))} ${
                unite ? " " + unite : ""
            }`}
            percentage={percentageEvolution}
            hasBackgroundColor={false}
        />
    );
};

export default ParameterCardValue;
