import {
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
} from "components/ui";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

interface ValueProps {
    currentYear: {
        unite: string | null;
        valeur: string;
    };
}

const Value = ({ currentYear }: ValueProps) => {
    const { valeur } = currentYear;
    const valeurToNumber = Number(currentYear.valeur);
    const valeurIsLabel = valeur === "Non" || valeur === "Oui";
    return valeurIsLabel ? (
        valeur === "Oui" ? (
            <LabelGreenCustomCrossIcon text="Oui" />
        ) : (
            <LabelGreyCustomCrossIcon text="Non" />
        )
    ) : (
        <span className="font-bold text-end">
            {isNaN(valeurToNumber)
                ? currentYear.valeur
                : formatNumberWithSpace(Math.round(Number(currentYear.valeur)))}
            {currentYear.unite && " " + currentYear.unite}
        </span>
    );
};

export default Value;
