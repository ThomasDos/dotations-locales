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
                        const { libelle, code } = autocompletionEntity;
                        const codeFormatted = formatCodeMetropole(code);

                        const codePostal =
                            autocompletionEntity.autocompletion.split(" ")[0];

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
