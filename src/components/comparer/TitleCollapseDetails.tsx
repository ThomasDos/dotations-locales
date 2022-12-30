import ImageFixed from "components/ui/ImageFixed";
import { matomoTrackEvent } from "services/matomo";
import styled from "styled-components";

const StyledSpanToggle = styled.span`
    color: var(--blue-france-sun-113-625);
`;

interface TitleCollapseDetailsProps {
    setShowDetails: (showShowCollapse: boolean) => void;
    showDetails: boolean;
}
const TitleCollapseDetails = ({
    setShowDetails,
    showDetails,
}: TitleCollapseDetailsProps) => {
    return (
        <div className="flex text-sm justify-between py-5 items-center">
            <span>Données par communes</span>
            <div
                className="flex items-center cursor-pointer "
                onClick={() => {
                    matomoTrackEvent(["Fonction", "Afficher détails comparer"]);
                    setShowDetails(!showDetails);
                }}
            >
                <StyledSpanToggle>
                    {showDetails ? "Moins de détails" : "Plus de détails"}
                </StyledSpanToggle>

                <ImageFixed
                    className={showDetails ? "" : "rotate-180"}
                    height={24}
                    width={24}
                    alt="Fleche vers le haut pour ouvrir les dotations non éligibles"
                    src="/icons/arrow-up.svg"
                />
            </div>
        </div>
    );
};

export default TitleCollapseDetails;
