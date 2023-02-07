import { AutocompletionEPCI } from "models/autocompletion/epci/autocompletion.epci.interface";
import { useRouter } from "next/router";
import DropdownEPCIRowLink from "./DropdownEPCIRowLink";

interface DropdownEPCISearchProps {
    autocompletionEPCI: AutocompletionEPCI[] | undefined;
}

const DropdownEPCISearch = ({
    autocompletionEPCI,
}: DropdownEPCISearchProps) => {
    const router = useRouter();
    const isFeatureComparer = router.pathname.includes("comparer");
    return (
        <>
            {!!autocompletionEPCI &&
                !isFeatureComparer &&
                autocompletionEPCI.map((entity: AutocompletionEPCI) => {
                    const { code: codeSiren, libelle } = entity;

                    return (
                        <DropdownEPCIRowLink
                            key={codeSiren}
                            codeSiren={codeSiren}
                            libelle={libelle}
                        />
                    );
                })}
        </>
    );
};

export default DropdownEPCISearch;
