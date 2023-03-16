import { AutocompletionDepartement } from "models/autocompletion/departement/autocompletion.departement.interface";
import DropdownDepartementRowLinkInscription from "./DropdownDepartementRowLinkInscription";

export interface DropdownDepartementRowProps {
    code: string;
    libelle: string;
}

interface DropdownDepartementSearchInscriptionProps {
    autocompletionDepartement: AutocompletionDepartement[] | undefined;
    handleClickSearchInput(entite: { code: string; libelle: string }): void;
}

const DropdownDepartementSearchInscription = ({
    autocompletionDepartement,
    handleClickSearchInput,
}: DropdownDepartementSearchInscriptionProps) => {
    return (
        <>
            {!!autocompletionDepartement &&
                autocompletionDepartement.map(
                    (entity: AutocompletionDepartement) => {
                        const { code, libelle } = entity;

                        return (
                            <DropdownDepartementRowLinkInscription
                                key={code}
                                code={code}
                                libelle={libelle}
                                handleClickSearchInput={handleClickSearchInput}
                            />
                        );
                    }
                )}
        </>
    );
};

export default DropdownDepartementSearchInscription;
