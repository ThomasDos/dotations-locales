import { matomoTrackEvent } from "services/matomo";
import StyledDropdownRow from "../StyledDropdownRow";

interface DropdownCommuneRowLinkInscriptionProps {
    codePostal: string;
    libelle: string;
    codeFormatted: string;
    handleClickSearchInput(entite: { code: string; libelle: string }): void;
}

const DropdownCommuneRowLinkInscription = ({
    libelle,
    codeFormatted,
    codePostal,
    handleClickSearchInput,
}: DropdownCommuneRowLinkInscriptionProps) => {
    return (
        <div
            onClick={() => {
                matomoTrackEvent(["Inscription Commune", libelle]);
                handleClickSearchInput({ code: codeFormatted, libelle });
            }}
        >
            <StyledDropdownRow>
                <span>
                    {libelle} ({codeFormatted})
                </span>
                <span>{codePostal}</span>
            </StyledDropdownRow>
        </div>
    );
};

export default DropdownCommuneRowLinkInscription;
