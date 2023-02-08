import { Collapse } from "@mui/material";
import { LabelText, Spinner } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import useFetchAutocompletionCommune from "hooks/useFetchAutocompletionCommune";
import useFetchAutocompletionEPCI from "hooks/useFetchAutocompletionEPCI";
import usePostCommuneComparer from "hooks/usePostCommuneComparer";
import { useState } from "react";
import styled from "styled-components";
import Dots from "../Dots";
import DropdownEPCISearch from "./DropdownEPCISearch";

import usePostEPCIComparer from "hooks/usePostEPCIComparer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectIsCommune, selectIsEPCI } from "store/appSettings.slice";
import DropdownCommuneSearch from "./DropdownCommuneSearch";

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
    const router = useRouter();
    const isFeatureComparer = router.pathname.includes("comparer");
    const isCommune = useSelector(selectIsCommune);
    const isEPCI = useSelector(selectIsEPCI);

    const [search, setSearch] = useState<string>("");

    const {
        data: autocompletionCommune,
        isLoading: searchResultCommuneIsLoading,
    } = useFetchAutocompletionCommune(search);

    const { data: autocompletionEPCI, isLoading: searchResultEPCIIsLoading } =
        useFetchAutocompletionEPCI(search);

    const {
        isLoading: fetchCommuneIsLoading,
        mutateAsync: fetchCommuneMutate,
    } = usePostCommuneComparer();

    const { isLoading: fetchEPCIIsLoading, mutateAsync: fetchEPCIMutate } =
        usePostEPCIComparer();

    const autocompletionEPCIFormatted = isFeatureComparer
        ? autocompletionEPCI
        : autocompletionEPCI?.slice(0, 5);

    const autocompletionCommuneFormatted = isFeatureComparer
        ? autocompletionCommune
        : autocompletionCommune?.slice(0, 5);

    return (
        <StyledSearchInputContainer fullWidth={fullWidth}>
            <StyledSearchInput className="flex">
                {fetchCommuneIsLoading || fetchEPCIIsLoading ? (
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
                            {searchResultCommuneIsLoading ||
                            searchResultEPCIIsLoading ? (
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
            {!fetchCommuneIsLoading && !fetchEPCIIsLoading && (
                <Collapse
                    in={
                        (!!autocompletionCommuneFormatted?.length ||
                            !!autocompletionEPCIFormatted?.length) &&
                        !!search
                    }
                >
                    <StyledCollapseContent
                        className="absolute z-10"
                        fullWidth={fullWidth}
                    >
                        {!isEPCI && (
                            <>
                                <div className="flex justify-between px-6 py-4">
                                    <LabelText
                                        text={`Communes (${
                                            autocompletionCommuneFormatted?.length ??
                                            "0"
                                        })`}
                                        backgroundColor="var(--blue-france-925)"
                                        color="var(--blue-france-113)"
                                    />
                                    <StyledSpanCodePostal className="text-xs">
                                        Code postal
                                    </StyledSpanCodePostal>
                                </div>
                                <DropdownCommuneSearch
                                    fetchCommuneMutate={fetchCommuneMutate}
                                    autocompletionCommune={
                                        autocompletionCommuneFormatted
                                    }
                                    resetSearch={() => setSearch("")}
                                    isFeatureComparer={isFeatureComparer}
                                />
                            </>
                        )}
                        {!isCommune && (
                            <>
                                <div className="flex justify-between px-6 py-4">
                                    <LabelText
                                        text={`Intercommunalités (${
                                            autocompletionEPCIFormatted?.length ??
                                            "0"
                                        })`}
                                        backgroundColor="var(--blue-france-925)"
                                        color="var(--blue-france-113)"
                                    />
                                </div>
                                <DropdownEPCISearch
                                    autocompletionEPCI={
                                        autocompletionEPCIFormatted
                                    }
                                    isFeatureComparer={isFeatureComparer}
                                    resetSearch={() => setSearch("")}
                                    fetchEPCIMutate={fetchEPCIMutate}
                                />
                            </>
                        )}
                    </StyledCollapseContent>
                </Collapse>
            )}
        </StyledSearchInputContainer>
    );
};

export default SearchInput;
