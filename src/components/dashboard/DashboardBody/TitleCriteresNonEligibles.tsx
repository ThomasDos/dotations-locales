import Image from "next/image";
import styled from "styled-components";

const StyledSpanToggle = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const StyledContainer = styled.div`
    border: var(--blue-france-850) 1px solid;
    border-top: none;
    padding: 16px 48px 16px 32px;
`;

interface TitleCriteresNonEligiblesProps {
    showNonEligible: boolean;
    setShowNonEligible: (showNonEligible: boolean) => void;
    countNonEligiblesCriteres: number;
}

function TitleCriteresNonEligibles({
    setShowNonEligible,
    showNonEligible,
    countNonEligiblesCriteres,
}: TitleCriteresNonEligiblesProps) {
    const ifPluralS = countNonEligiblesCriteres > 1 ? "s" : "";
    return (
        <StyledContainer className="flex text-sm justify-between items-center">
            <span>
                {countNonEligiblesCriteres} autre{ifPluralS} critère
                {ifPluralS} non éligible{ifPluralS}
            </span>
            <div
                className="flex items-center cursor-pointer "
                onClick={() => {
                    setShowNonEligible(!showNonEligible);
                }}
            >
                <StyledSpanToggle>
                    {showNonEligible ? "Tout masquer" : "Afficher"}
                </StyledSpanToggle>
                <div>
                    <Image
                        src="/icons/arrow-up.svg"
                        height="24px"
                        width="24px"
                        layout="fixed"
                        alt="Fleche vers le haut pour ouvrir les critères non éligibles"
                        className={showNonEligible ? "" : "rotate-180"}
                    />
                </div>
            </div>
        </StyledContainer>
    );
}

export default TitleCriteresNonEligibles;
