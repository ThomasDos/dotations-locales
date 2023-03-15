import { UsePostEntityComparerProps } from "hooks/usePostCommuneComparer";
import { matomoTrackEvent } from "services/matomo";
import StyledDropdownRow from "../StyledDropdownRow";
import { DropdownDepartementRowProps } from "./DropdownDepartementSearch";

interface DropdownDepartementRowComparerProps
    extends DropdownDepartementRowProps {
    resetSearch(): void;
    fetchDepartementMutate(props: UsePostEntityComparerProps): void;
}

const DropdownDepartementRowComparer = ({
    resetSearch,
    libelle,
    code,
    fetchDepartementMutate,
}: DropdownDepartementRowComparerProps) => {
    return (
        <div
            onClick={async () => {
                matomoTrackEvent(["Comparer", libelle]);
                try {
                    await fetchDepartementMutate({
                        code,
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
                    {libelle} ({code})
                </span>
            </StyledDropdownRow>
        </div>
    );
};

export default DropdownDepartementRowComparer;
