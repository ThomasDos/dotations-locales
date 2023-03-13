import { UsePostEntityComparerProps } from "hooks/usePostCommuneComparer";
import { matomoTrackEvent } from "services/matomo";
import StyledDropdownRow from "../StyledDropdownRow";
import { DropdownEPCIRowProps } from "./DropdownEPCISearch";

interface DropdownEPCIRowComparerProps extends DropdownEPCIRowProps {
    resetSearch(): void;
    fetchEPCIMutate(props: UsePostEntityComparerProps): void;
}

const DropdownEPCIRowComparer = ({
    resetSearch,
    libelle,
    code,
    fetchEPCIMutate,
}: DropdownEPCIRowComparerProps) => {
    return (
        <div
            onClick={async () => {
                matomoTrackEvent(["Comparer", libelle]);
                try {
                    await fetchEPCIMutate({
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

export default DropdownEPCIRowComparer;
