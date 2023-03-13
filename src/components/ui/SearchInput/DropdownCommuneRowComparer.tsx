import { UsePostEntityComparerProps } from "hooks/usePostCommuneComparer";
import { matomoTrackEvent } from "services/matomo";
import { DropdownCommuneRowProps } from "./DropdownCommuneSearch";
import StyledDropdownRow from "./StyledDropdownRow";

interface DropdownCommuneRowComparerProps extends DropdownCommuneRowProps {
    resetSearch(): void;
    fetchCommuneMutate(props: UsePostEntityComparerProps): void;
}

const DropdownCommuneRowComparer = ({
    resetSearch,
    libelle,
    codeFormatted,
    codePostal,
    fetchCommuneMutate,
}: DropdownCommuneRowComparerProps) => {
    return (
        <div
            onClick={async () => {
                matomoTrackEvent(["Comparer", libelle]);
                try {
                    await fetchCommuneMutate({
                        code: codeFormatted,
                        libelle,
                    });
                    resetSearch();
                } catch (error) {
                    //TODO: manage error
                }
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

export default DropdownCommuneRowComparer;
