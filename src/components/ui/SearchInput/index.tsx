import { Collapse } from "@mui/material";
import { LabelText, Spinner } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import useFetchAutocompletion from "hooks/useFetchAutocompletion";
import usePostCommuneComparer from "hooks/usePostCommuneComparer";
import { useState } from "react";
import styled from "styled-components";
import Dots from "../Dots";

import DropdownSearch from "./DropdownSearch";

const StyledSearchButton = styled.div`
    background-color: var(--blue-france-sun-113-625);
    border-top-right-radius: 4px;
    gap: 8px;
    cursor: default;
`;

const StyledCollapseContent = styled.div<{ fullWidth?: boolean }>`
    filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.16));
    width: calc(100% - 2rem);
    background-color: var(--grey-1000);

    @media (min-width: 768px) {
        width: ${({ fullWidth }) =>
            fullWidth ? "calc(100% - 2rem)" : "760px"};
    }

    @media (min-width: 940px) {
        width: ${({ fullWidth }) => fullWidth && "calc(100% - 12.5rem)"};
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

const StyledDotsContainer = styled.div`
    flex: 1;
    background: var(--grey-950);
    display: flex;
    justify-content: center;
    :focus {
        outline: none;
    }
`;

const StyledSpanCodePostal = styled.span`
    color: #666666;
`;

const StyledSearchInputContainer = styled.div<{ fullWidth?: boolean }>`
    width: 100%;
    @media (min-width: 768px) {
        width: ${({ fullWidth }) => !fullWidth && "760px"};
    }

    @media (max-width: 768px) {
        padding: ${({ fullWidth }) => !fullWidth && "0 0.5rem"};
    }
`;

interface SearchInputProps {
    fullWidth?: boolean;
    placeholder: string;
    textIcon: string;
}

const SearchInput = ({
    fullWidth,
    placeholder,
    textIcon,
}: SearchInputProps) => {
    const [search, setSearch] = useState<string>("");

    const { data: autocompletion, isLoading: searchResultIsLoading } =
        useFetchAutocompletion(search);

    const {
        isLoading: fetchCommuneIsLoading,
        mutateAsync: fetchCommuneMutate,
    } = usePostCommuneComparer();

    return (
        <StyledSearchInputContainer fullWidth={fullWidth}>
            <StyledSearchInput className="flex">
                {fetchCommuneIsLoading ? (
                    <StyledDotsContainer>
                        <Dots dotsColor="--blue-france-113" />
                    </StyledDotsContainer>
                ) : (
                    <StyledInput
                        autoFocus
                        type="text"
                        placeholder={placeholder}
                        className="pl-4"
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                        }}
                    />
                )}
                <button type="button" role="button">
                    <StyledSearchButton className="flex justify-center items-center py-3 px-2 md:px-8">
                        <div className="flex items-center space-x-2">
                            {searchResultIsLoading ? (
                                <Spinner />
                            ) : (
                                <ImageFixed
                                    src="/icons/search.svg"
                                    height={24}
                                    width={24}
                                    alt="icone rechercher"
                                />
                            )}
                            <StyledSpanButton className="text-sm md:text-xl font-normal">
                                {textIcon}
                            </StyledSpanButton>
                        </div>
                    </StyledSearchButton>
                </button>
            </StyledSearchInput>
            {!fetchCommuneIsLoading && (
                <Collapse in={!!autocompletion?.length && !!search}>
                    <StyledCollapseContent
                        className="absolute z-10"
                        fullWidth={fullWidth}
                    >
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
                            fetchCommuneMutate={fetchCommuneMutate}
                            autocompletion={autocompletion}
                            search={search}
                            resetSearch={() => setSearch("")}
                        />
                    </StyledCollapseContent>
                </Collapse>
            )}
        </StyledSearchInputContainer>
    );
};

export default SearchInput;
