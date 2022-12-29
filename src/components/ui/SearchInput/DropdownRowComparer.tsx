import { UsePostCommuneComparerProps } from "hooks/usePostCommuneComparer";
import { matomoTrackEvent } from "services/matomo";
import { DropdownRowProps } from "./DropdownSearch";
import StyledDropdownRow from "./StyledDropdownRow";

interface DropdownRowComparerProps extends DropdownRowProps {
    resetSearch(): void;
    fetchCommuneMutate(props: UsePostCommuneComparerProps): void;
}

const DropdownRowComparer = ({
    search,
    resetSearch,
    commune,
    codeInseeFormatted,
    codePostal,
    fetchCommuneMutate,
}: DropdownRowComparerProps) => {
    return (
        <div
            onClick={async () => {
                matomoTrackEvent(["Comparer", commune]);
                try {
                    await fetchCommuneMutate({
                        codeInsee: codeInseeFormatted,
                        commune,
                    });
                    resetSearch();
                } catch (error) {
                    //TODO: manage error
                }
            }}
        >
            <StyledDropdownRow className="flex justify-between px-6 py-4">
                <span>
                    {commune} ({codeInseeFormatted})
                </span>
                <span>{codePostal}</span>
            </StyledDropdownRow>
        </div>
    );
};

export default DropdownRowComparer;
