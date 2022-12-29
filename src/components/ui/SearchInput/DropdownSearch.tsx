import { UsePostCommuneComparerProps } from "hooks/usePostCommuneComparer";
import { useRouter } from "next/router";
import type { Autocompletion } from "src/models/autocompletion/autocompletion.interface";
import formatCodeInseeMetropole from "utils/formatCodeInseeMetropole";
import DropdownRowComparer from "./DropdownRowComparer";
import DropdownRowLink from "./DropdownRowLink";

interface DropdownSearchProps {
    autocompletion: Autocompletion[] | undefined;
    search: string;
    resetSearch(): void;
    fetchCommuneMutate(props: UsePostCommuneComparerProps): void;
}

export interface DropdownRowProps {
    search: string;
    codePostal: string;
    commune: string;
    codeInseeFormatted: string;
}

const DropdownSearch = ({
    autocompletion,
    search,
    resetSearch,
    fetchCommuneMutate,
}: DropdownSearchProps) => {
    const router = useRouter();
    const isFeatureComparer = router.pathname.includes("comparer");

    return (
        <>
            {!!autocompletion &&
                autocompletion.map((entity: Autocompletion) => {
                    const { codeCommuneInsee: codeInsee, codePostal } =
                        entity.distributionsPostales[0];
                    const { LIBELLE: commune } = entity.commune;
                    const codeInseeFormatted =
                        formatCodeInseeMetropole(codeInsee);

                    return isFeatureComparer ? (
                        <DropdownRowComparer
                            key={entity.code}
                            search={search}
                            resetSearch={resetSearch}
                            codePostal={codePostal}
                            commune={commune}
                            codeInseeFormatted={codeInseeFormatted}
                            fetchCommuneMutate={fetchCommuneMutate}
                        />
                    ) : (
                        <DropdownRowLink
                            key={entity.code}
                            search={search}
                            codePostal={codePostal}
                            commune={commune}
                            codeInseeFormatted={codeInseeFormatted}
                        />
                    );
                })}
        </>
    );
};

export default DropdownSearch;
