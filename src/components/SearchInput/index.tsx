import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const SearchButtonContainer = styled.div`
    background-color: var(--blue-france-sun-113-625);
    border-top-right-radius: 4px;
    gap: 8px;
`;

const SearchInputContainer = styled.div`
    width: 792px;
    border-bottom: 2px solid var(--blue-france-sun-113-625);
`;

const SpanButtonContainer = styled.span`
    color: var(--blue-france-975);
`;
const InputContainer = styled.input`
    width: 100%;
    background: var(--grey-950);
    color: var(--grey-425);
    font-style: italic;
`;

interface SearchInputProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
    return (
        <SearchInputContainer className="flex">
            <InputContainer
                type="text"
                placeholder="Nom de la collectivité ou code insee"
                className="pl-4"
                value={search}
                onChange={e => {
                    setSearch(e.target.value);
                }}
            />
            <button type="button" role="button">
                <SearchButtonContainer className="flex justify-center items-center py-3 px-8">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/icons/search.svg"
                            height="20.31px"
                            width="20.31px"
                            alt="icone rechercher"
                            layout="fixed"
                        />
                        <SpanButtonContainer className="text-xl font-normal">
                            Rechercher
                        </SpanButtonContainer>
                    </div>
                </SearchButtonContainer>
            </button>
        </SearchInputContainer>
    );
};

export default SearchInput;
