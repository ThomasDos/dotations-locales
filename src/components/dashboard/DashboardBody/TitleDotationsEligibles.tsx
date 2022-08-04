interface TitleDotationsEligiblesProps {
    countEligibleDotations: number;
}
const TitleDotationsEligibles = ({
    countEligibleDotations,
}: TitleDotationsEligiblesProps) => {
    const ifPluralS = countEligibleDotations > 1 ? "s" : "";
    return (
        <div className="flex text-sm justify-between my-10 cursor-pointer">
            <span>
                Votre commune est éligible à {countEligibleDotations} dotation
                {ifPluralS}&nbsp;(composant{ifPluralS})
            </span>
        </div>
    );
};

export default TitleDotationsEligibles;