import Image from "next/image";
import { matomoTrackEvent } from "services/matomo";
import styled from "styled-components";

const StyledSpanToggle = styled.span`
    color: var(--blue-france-sun-113-625);
`;

interface TitleDotationsNonEligiblesProps {
    countNonEligibleDotations: number;
    setShowNonEligible: (showNowEligible: boolean) => void;
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
                    matomoTrackEvent([
                        "fonction",
                        "afficher non éligibles",
                        "dotations",
                    ]);
                    setShowNonEligible(!showNonEligible);
                }}
            >
                <StyledSpanToggle>
                    {showNonEligible ? "Tout masquer" : "Tout voir"}
                </StyledSpanToggle>
                <div className={showNonEligible ? "" : "rotate-180"}>
                    <Image
                        src="/icons/arrow-up.svg"
                        height={24}
                        width={24}
                        alt="Fleche vers le haut pour ouvrir les dotations non éligibles"
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleDotationsNonEligibles;
