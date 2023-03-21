import { Collapse } from "@mui/material";
import { LabelText } from "components/ui";
import useFetchAutocompletionCommune from "hooks/useFetchAutocompletionCommune";
import useFetchAutocompletionEPCI from "hooks/useFetchAutocompletionEPCI";
import { useState } from "react";
import styled from "styled-components";

import Input from "components/ui/Input";
import DropdownCommuneSearchInscription from "components/ui/SearchInput/commune/DropdownCommuneSearchInscription";
import DropdownDepartementSearchInscription from "components/ui/SearchInput/departement/DropdownDepartementSearchInscription";
import DropdownEPCISearchInscription from "components/ui/SearchInput/epci/DropdownEPCISearchInscription";
import useFetchAutocompletionDepartement from "hooks/useFetchAutocompletionDepartement";

const StyledCollapseContent = styled.div`
    filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.16));
    background-color: var(--grey-1000);
`;

const StyledSpanCodePostal = styled.span`
    color: #666666;
`;

interface SearchInputInscriptionProps {
    setUserEntite(entite: { code: string; libelle: string }): void;
}

const SearchInputInscription = ({
    setUserEntite,
}: SearchInputInscriptionProps) => {
    const [search, setSearch] = useState<string>("");

    const handleClickSearchInput = ({
        code,
        libelle,
    }: {
        code: string;
        libelle: string;
    }) => {
        setUserEntite({ code, libelle });
        setSearch("");
    };

    const { data: autocompletionCommune } =
        useFetchAutocompletionCommune(search);

    const { data: autocompletionEPCI } = useFetchAutocompletionEPCI(search);

    const { data: autocompletionDepartement } =
        useFetchAutocompletionDepartement(search);

    const autocompletionCommuneFormatted = autocompletionCommune?.slice(0, 5);
    const autocompletionEPCIFormatted = autocompletionEPCI?.slice(0, 3);
    const autocompletionDepartementFormatted = autocompletionDepartement?.slice(
        0,
        3
    );

    const autocompletionHasLength =
        !!autocompletionCommuneFormatted?.length ||
        !!autocompletionEPCIFormatted?.length ||
        !!autocompletionDepartementFormatted?.length;

    return (
        <>
            <Input
                autoFocus
                type="text"
                placeholder="Recherchez par nom, code insee ou code postal"
                value={search}
                setValue={setSearch}
                className="mt-4"
            />

            <Collapse in={autocompletionHasLength && !!search}>
                <StyledCollapseContent>
                    <div className="flex justify-between px-6 py-4">
                        <LabelText
                            text={`Communes (${
                                autocompletionCommuneFormatted?.length ?? "0"
                            })`}
                            backgroundColor="var(--blue-france-925)"
                            color="var(--blue-france-113)"
                        />
                        <StyledSpanCodePostal className="text-xs">
                            Code postal
                        </StyledSpanCodePostal>
                    </div>
                    <DropdownCommuneSearchInscription
                        handleClickSearchInput={handleClickSearchInput}
                        autocompletionCommune={autocompletionCommuneFormatted}
                    />
                    <div className="flex justify-between px-6 py-4">
                        <LabelText
                            text={`Intercommunalités (${
                                autocompletionEPCIFormatted?.length ?? "0"
                            })`}
                            backgroundColor="var(--blue-france-925)"
                            color="var(--blue-france-113)"
                        />
                    </div>
                    <DropdownEPCISearchInscription
                        autocompletionEPCI={autocompletionEPCIFormatted}
                        handleClickSearchInput={handleClickSearchInput}
                    />

                    <div className="flex justify-between px-6 py-4">
                        <LabelText
                            text={`Départements (${
                                autocompletionDepartementFormatted?.length ??
                                "0"
                            })`}
                            backgroundColor="var(--blue-france-925)"
                            color="var(--blue-france-113)"
                        />
                    </div>
                    <DropdownDepartementSearchInscription
                        autocompletionDepartement={
                            autocompletionDepartementFormatted
                        }
                        handleClickSearchInput={handleClickSearchInput}
                    />
                </StyledCollapseContent>
            </Collapse>
        </>
    );
};

export default SearchInputInscription;
