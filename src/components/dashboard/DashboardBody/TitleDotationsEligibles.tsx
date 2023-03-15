import { useSelector } from "react-redux";
import { selectEntityDenomination } from "store/appSettings.slice";

interface TitleDotationsEligiblesProps {
    countEligibleDotations: number;
}
const TitleDotationsEligibles = ({
    countEligibleDotations,
}: TitleDotationsEligiblesProps) => {
    const entityDenomination = useSelector(selectEntityDenomination);

    const ifPluralS = countEligibleDotations > 1 ? "s" : "";
    return (
        <div className="flex text-sm text-center sm:text-start my-10 cursor-pointer">
            <span>
                Votre {entityDenomination} est éligible à{" "}
                {countEligibleDotations} dotation
                {ifPluralS}&nbsp;(composant{ifPluralS})
            </span>
        </div>
    );
};

export default TitleDotationsEligibles;
