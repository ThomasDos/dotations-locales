import StyledDropdownRow from "../StyledDropdownRow";

interface DropdownDepartementRowLinkInscriptionProps {
    code: string;
    libelle: string;
    handleClickSearchInput(entite: { code: string; libelle: string }): void;
}

const DropdownDepartementRowLinkInscription = ({
    code,
    libelle,
    handleClickSearchInput,
}: DropdownDepartementRowLinkInscriptionProps) => {
    return (
        <div
            onClick={() => {
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

export default DropdownDepartementRowLinkInscription;
