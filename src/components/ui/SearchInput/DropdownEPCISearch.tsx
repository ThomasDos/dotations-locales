import { UsePostEntityComparerProps } from "hooks/usePostCommuneComparer";
import { AutocompletionEPCI } from "models/autocompletion/epci/autocompletion.epci.interface";
import DropdownEPCIRowComparer from "./DropdownEPCIRowComparer";
import DropdownEPCIRowLink from "./DropdownEPCIRowLink";

export interface DropdownEPCIRowProps {
    code: string;
    libelle: string;
}

interface DropdownEPCISearchProps {
    autocompletionEPCI: AutocompletionEPCI[] | undefined;
    isFeatureComparer: boolean;
    resetSearch(): void;
    fetchEPCIMutate(props: UsePostEntityComparerProps): void;
}

const DropdownEPCISearch = ({
    autocompletionEPCI,
    isFeatureComparer,
    resetSearch,
    fetchEPCIMutate,
}: DropdownEPCISearchProps) => {
    return (
        <>
            {!!autocompletionEPCI &&
                autocompletionEPCI.map((entity: AutocompletionEPCI) => {
                    const { code, libelle } = entity;
                    //TODO: rétablier quand comparer pour EPCI prêt
                    return isFeatureComparer && false ? (
                        <DropdownEPCIRowComparer
                            code={code}
                            libelle={libelle}
                            resetSearch={resetSearch}
                            fetchEPCIMutate={fetchEPCIMutate}
                        />
                    ) : (
                        <DropdownEPCIRowLink
                            key={code}
                            code={code}
                            libelle={libelle}
                        />
                    );
                })}
        </>
    );
};

export default DropdownEPCISearch;
