import { AutocompletionEPCI } from "models/autocompletion/epci/autocompletion.epci.interface";
import DropdownEPCIRowLinkInscription from "./DropdownEPCIRowLinkInscription";

export interface DropdownEPCIRowProps {
    code: string;
    libelle: string;
}

interface DropdownEPCISearchInscriptionProps {
    autocompletionEPCI: AutocompletionEPCI[] | undefined;
    handleClickSearchInput(entite: { code: string; libelle: string }): void;
}

const DropdownEPCISearchInscription = ({
    autocompletionEPCI,
    handleClickSearchInput,
}: DropdownEPCISearchInscriptionProps) => {
    return (
        <>
            {!!autocompletionEPCI &&
                autocompletionEPCI.map((entity: AutocompletionEPCI) => {
                    const { code, libelle } = entity;

                    return (
                        <DropdownEPCIRowLinkInscription
                            handleClickSearchInput={handleClickSearchInput}
                            key={code}
                            code={code}
                            libelle={libelle}
                        />
                    );
                })}
        </>
    );
};

export default DropdownEPCISearchInscription;
