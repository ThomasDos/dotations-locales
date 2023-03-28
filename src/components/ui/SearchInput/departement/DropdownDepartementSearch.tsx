import { UsePostEntityComparerProps } from "hooks/usePostCommuneComparer";
import { AutocompletionDepartement } from "models/autocompletion/departement/autocompletion.departement.interface";
import capitalizeEveryFirstLetter from "utils/capitalizeEveryFirstLetter";
import DropdownDepartementRowComparer from "./DropdownDepartementRowComparer";
import DropdownDepartementRowLink from "./DropdownDepartementRowLink";

export interface DropdownDepartementRowProps {
    code: string;
    libelle: string;
}

interface DropdownDepartementSearchProps {
    autocompletionDepartement: AutocompletionDepartement[] | undefined;
    isFeatureComparer: boolean;
    resetSearch(): void;
    fetchDepartementMutate(props: UsePostEntityComparerProps): void;
}

const DropdownDepartementSearch = ({
    autocompletionDepartement,
    isFeatureComparer,
    resetSearch,
    fetchDepartementMutate,
}: DropdownDepartementSearchProps) => {
    return (
        <>
            {!!autocompletionDepartement &&
                autocompletionDepartement.map(
                    (entity: AutocompletionDepartement) => {
                        const { code } = entity;
                        const libelle = capitalizeEveryFirstLetter(
                            entity.libelle
                        );
                        return isFeatureComparer ? (
                            <DropdownDepartementRowComparer
                                code={code}
                                libelle={libelle}
                                resetSearch={resetSearch}
                                fetchDepartementMutate={fetchDepartementMutate}
                            />
                        ) : (
                            <DropdownDepartementRowLink
                                key={code}
                                code={code}
                                libelle={libelle}
                            />
                        );
                    }
                )}
        </>
    );
};

export default DropdownDepartementSearch;
