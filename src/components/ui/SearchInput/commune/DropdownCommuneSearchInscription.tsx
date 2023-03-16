import { AutocompletionCommune } from "models/autocompletion/commune/autocompletion.commune.interface";
import formatCodeMetropole from "utils/formatCodeMetropole";
import DropdownCommuneRowLinkInscription from "./DropdownCommuneRowLinkInscription";

interface DropdownCommuneSearchInscriptionProps {
    autocompletionCommune: AutocompletionCommune[] | undefined;
    handleClickSearchInput(entite: { code: string; libelle: string }): void;
}

export interface DropdownCommuneRowProps {
    codePostal: string;
    libelle: string;
    codeFormatted: string;
}

const DropdownCommuneSearchInscription = ({
    autocompletionCommune,
    handleClickSearchInput,
}: DropdownCommuneSearchInscriptionProps) => {
    return (
        <>
            {!!autocompletionCommune &&
                autocompletionCommune.map(
                    (autocompletionEntity: AutocompletionCommune) => {
                        const { codeCommuneInsee: code, codePostal } =
                            autocompletionEntity.distributionsPostales[0];
                        const { LIBELLE: libelle } =
                            autocompletionEntity.commune;
                        const codeFormatted = formatCodeMetropole(code);

                        return (
                            <DropdownCommuneRowLinkInscription
                                key={autocompletionEntity.code}
                                codePostal={codePostal}
                                libelle={libelle}
                                codeFormatted={codeFormatted}
                                handleClickSearchInput={handleClickSearchInput}
                            />
                        );
                    }
                )}
        </>
    );
};

export default DropdownCommuneSearchInscription;
