import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const StyledSpanToggle = styled.span`
    color: var(--blue-france-sun-113-625);
`;

interface TitleDotationsNonEligiblesProps {
    countNonEligibleDotations: number;
    setShowNonEligible: Dispatch<SetStateAction<boolean>>;
    showNonEligible: boolean;
}
const TitleDotationsNonEligibles = ({
    countNonEligibleDotations,
    showNonEligible,
    setShowNonEligible,
}: TitleDotationsNonEligiblesProps) => {
    const ifPluralS = countNonEligibleDotations > 1 ? "s" : "";
    return (
        <div className="flex text-sm justify-between my-10 items-center">
            <span>
                {countNonEligibleDotations} autre{ifPluralS} dotation
                {ifPluralS} non éligible{ifPluralS}
            </span>
            <div
                className="flex items-center cursor-pointer "
                onClick={() => {
                    setShowNonEligible(!showNonEligible);
                }}
            >
                <StyledSpanToggle>
                    {showNonEligible ? "Tout masquer" : "Tout voir"}
                </StyledSpanToggle>
                <div>
                    <Image
                        src="/icons/arrow-up.svg"
                        height="24px"
                        width="24px"
                        layout="fixed"
                        alt="Fleche vers le haut pour ouvrir les dotations non éligibles"
                        className={showNonEligible ? "" : "rotate-180"}
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleDotationsNonEligibles;
