import { Collapse } from "@mui/material";
import { LabelText, Spinner } from "components/ui";
import useFetchAutocompletion from "hooks/useFetchAutocompletion";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import DropdownSearch from "./DropdownSearch";

const StyledSearchButton = styled.div`
    background-color: var(--blue-france-sun-113-625);
    border-top-right-radius: 4px;
    gap: 8px;
`;

const StyledCollapseContent = styled.div`
    filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.16));
    width: calc(100% - 2rem);

    @media (min-width: 768px) {
        width: 760px;
    }
`;

const StyledSearchInput = styled.div`
    border-bottom: 2px solid var(--blue-france-sun-113-625);
`;

const StyledSpanButton = styled.span`
    color: var(--blue-france-975);
`;
const StyledInput = styled.input`
    flex: 1;
    background: var(--grey-950);
    color: var(--grey-425);
    font-style: italic;
    :focus {
        outline: none;
    }
`;

const StyledSpanCodePostal = styled.span`
    color: #666666;
`;

const StyledSearchInputContainer = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 760px;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const SearchInput = () => {
    const [search, setSearch] = useState<string>("");

    const { data: autocompletion, isLoading: searchResultIsLoading } =
        useFetchAutocompletion(search);

    return (
        <StyledSearchInputContainer>
            <StyledSearchInput className="flex">
                <StyledInput
                    type="text"
                    placeholder={`${
                        window.innerWidth > 480 ? "Nom de la c" : "C"
                    }ollectivité ou code insee`}
                    className="pl-4"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                    }}
                />
                <button type="button" role="button">
                    <StyledSearchButton className="flex justify-center items-center py-3 px-2 md:px-8">
                        <div className="flex items-center space-x-2">
                            {searchResultIsLoading ? (
                                <Spinner />
                            ) : (
                                <div className="flex">
                                    <Image
                                        src="/icons/search.svg"
                                        height="24px"
                                        width="24px"
                                        alt="icone rechercher"
                                        layout="fixed"
                                    />
                                </div>
                            )}
                            <StyledSpanButton className="text-sm md:text-xl font-normal">
                                Rechercher
                            </StyledSpanButton>
                        </div>
                    </StyledSearchButton>
                </button>
            </StyledSearchInput>
            <Collapse in={!!autocompletion?.length && !!search}>
                <StyledCollapseContent className="absolute bg-white z-10">
                    <div className="flex justify-between px-6 py-4">
                        <div>
                            <LabelText
                                text={`Communes (${
                                    autocompletion?.length ?? "0"
                                })`}
                                backgroundColor="var(--blue-france-925)"
                                color="var(--blue-france-113)"
                            />
                        </div>
                        <StyledSpanCodePostal className="text-xs">
                            Code postal
                        </StyledSpanCodePostal>
                    </div>
                    <DropdownSearch
                        autocompletion={autocompletion}
                        search={search}
                    />
                </StyledCollapseContent>
            </Collapse>
        </StyledSearchInputContainer>
    );
};

export default SearchInput;
