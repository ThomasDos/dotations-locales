import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectIsCommune, selectIsEPCI } from "store/appSettings.slice";

interface TitleDotationsEligiblesProps {
    countEligibleDotations: number;
}
const TitleDotationsEligibles = ({
    countEligibleDotations,
}: TitleDotationsEligiblesProps) => {
    const isCommune = useSelector(selectIsCommune);
    const isEPCI = useSelector(selectIsEPCI);

    const entity = useMemo(() => {
        switch (true) {
            case isCommune:
                return "commune";
            case isEPCI:
                return "intercommunalité";
            default:
                return "commune";
        }
    }, [isCommune, isEPCI]);
    const ifPluralS = countEligibleDotations > 1 ? "s" : "";
    return (
        <div className="flex text-sm text-center sm:text-start my-10 cursor-pointer">
            <span>
                Votre {entity} est éligible à {countEligibleDotations} dotation
                {ifPluralS}&nbsp;(composant{ifPluralS})
            </span>
        </div>
    );
};

export default TitleDotationsEligibles;
