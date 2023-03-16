import { matomoTrackEvent } from "services/matomo";
import StyledDropdownRow from "../StyledDropdownRow";

interface DropdownEPCIRowLinkInscriptionProps {
    code: string;
    libelle: string;
    handleClickSearchInput(entite: { code: string; libelle: string }): void;
}

const DropdownEPCIRowLinkInscription = ({
    code,
    libelle,
    handleClickSearchInput,
}: DropdownEPCIRowLinkInscriptionProps) => {
    return (
        <div
            onClick={() => {
                matomoTrackEvent(["Inscription EPCI", libelle]);
                handleClickSearchInput({ code, libelle });
            }}
        >
            <StyledDropdownRow>
                <span>
                    {libelle} ({code})
                </span>
            </StyledDropdownRow>
        </div>
    );
};

export default DropdownEPCIRowLinkInscription;
