import { UsePostEntityComparerProps } from "hooks/usePostCommuneComparer";
import { AutocompletionCommune } from "models/autocompletion/commune/autocompletion.commune.interface";
import formatCodeMetropole from "utils/formatCodeMetropole";
import DropdownCommuneRowComparer from "./DropdownCommuneRowComparer";
import DropdownCommuneRowLink from "./DropdownCommuneRowLink";

interface DropdownCommuneSearchProps {
    autocompletionCommune: AutocompletionCommune[] | undefined;
    resetSearch(): void;
    fetchCommuneMutate(props: UsePostEntityComparerProps): void;
    isFeatureComparer: boolean;
}

export interface DropdownCommuneRowProps {
    codePostal: string;
    libelle: string;
    codeFormatted: string;
}

const DropdownCommuneSearch = ({
    autocompletionCommune,
    resetSearch,
    fetchCommuneMutate,
    isFeatureComparer,
}: DropdownCommuneSearchProps) => {
    return (
        <>
            {!!autocompletionCommune &&
                autocompletionCommune.map(
                    (autocompletionEntity: AutocompletionCommune) => {
                        const { libelle, code } = autocompletionEntity;
                        const codeFormatted = formatCodeMetropole(code);

                        const codePostal =
                            autocompletionEntity.autocompletion.split(" ")[0];

                        return isFeatureComparer ? (
                            <DropdownCommuneRowComparer
                                key={autocompletionEntity.code}
                                resetSearch={resetSearch}
                                codePostal={codePostal}
                                libelle={libelle}
                                codeFormatted={codeFormatted}
                                fetchCommuneMutate={fetchCommuneMutate}
                            />
                        ) : (
                            <DropdownCommuneRowLink
                                key={autocompletionEntity.code}
                                codePostal={codePostal}
                                libelle={libelle}
                                codeFormatted={codeFormatted}
                            />
                        );
                    }
                )}
        </>
    );
};

export default DropdownCommuneSearch;
