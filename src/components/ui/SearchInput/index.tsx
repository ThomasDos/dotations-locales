import { Collapse } from "@mui/material";
import { LabelText, Spinner } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import useFetchAutocompletionCommune from "hooks/useFetchAutocompletionCommune";
import useFetchAutocompletionEPCI from "hooks/useFetchAutocompletionEPCI";
import usePostCommuneComparer from "hooks/usePostCommuneComparer";
import { useState } from "react";
import styled from "styled-components";
import Dots from "../Dots";

import useFetchAutocompletionDepartement from "hooks/useFetchAutocompletionDepartement";
import usePostDepartementComparer from "hooks/usePostDepartementComparer";
import usePostEPCIComparer from "hooks/usePostEPCIComparer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
    selectIsCommune,
    selectIsDepartement,
    selectIsEPCI,
} from "store/appSettings.slice";
import DropdownCommuneSearch from "./commune/DropdownCommuneSearch";
import DropdownDepartementSearch from "./departement/DropdownDepartementSearch";
import DropdownEPCISearch from "./epci/DropdownEPCISearch";

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
        width: ${({ fullWidth }) => fullWidth && "calc(100%)"};
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
    const isDepartement = useSelector(selectIsDepartement);

    const [search, setSearch] = useState<string>("");

    const {
        data: autocompletionCommune,
        isInitialLoading: searchResultCommuneIsLoading,
    } = useFetchAutocompletionCommune(search);

    const {
        data: autocompletionEPCI,
        isInitialLoading: searchResultEPCIIsLoading,
    } = useFetchAutocompletionEPCI(search);

    const {
        data: autocompletionDepartement,
        isInitialLoading: searchResultDepartementIsLoading,
    } = useFetchAutocompletionDepartement(search);

    const {
        isLoading: fetchCommuneIsLoading,
        mutateAsync: fetchCommuneMutate,
    } = usePostCommuneComparer();

    const { isLoading: fetchEPCIIsLoading, mutateAsync: fetchEPCIMutate } =
        usePostEPCIComparer();

    const {
        isLoading: fetchDepartementIsLoading,
        mutateAsync: fetchDepartementMutate,
    } = usePostDepartementComparer();

    const autocompletionEPCIFormatted = isFeatureComparer
        ? autocompletionEPCI
        : autocompletionEPCI?.slice(0, 3);

    const autocompletionCommuneFormatted = isFeatureComparer
        ? autocompletionCommune
        : autocompletionCommune?.slice(0, 5);

    const autocompletionDepartementFormatted = isFeatureComparer
        ? autocompletionDepartement
        : autocompletionDepartement?.slice(0, 3);

    const fetchEntityIsLoading =
        fetchCommuneIsLoading ||
        fetchEPCIIsLoading ||
        fetchDepartementIsLoading;

    const searchResultEntityIsLoading =
        searchResultCommuneIsLoading ||
        searchResultEPCIIsLoading ||
        searchResultDepartementIsLoading;

    const autocompletionHasLength =
        !!autocompletionCommuneFormatted?.length ||
        !!autocompletionEPCIFormatted?.length ||
        !!autocompletionDepartementFormatted?.length;

    return (
        <StyledSearchInputContainer fullWidth={fullWidth}>
            <StyledSearchInput className="flex">
                {fetchEntityIsLoading ? (
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
                <StyledSearchButton className="flex justify-center items-center py-3 px-2 md:px-8">
                    <div className="flex items-center space-x-2">
                        {searchResultEntityIsLoading ? (
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
            </StyledSearchInput>
            {!fetchEntityIsLoading && (
                <Collapse in={autocompletionHasLength && !!search}>
                    <StyledCollapseContent
                        className="absolute z-10"
                        fullWidth={fullWidth}
                    >
                        {!isEPCI && !isDepartement && (
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
                        {!isCommune && !isDepartement && (
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

                        {!isCommune && !isEPCI && (
                            <>
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
                                <DropdownDepartementSearch
                                    autocompletionDepartement={
                                        autocompletionDepartementFormatted
                                    }
                                    isFeatureComparer={isFeatureComparer}
                                    resetSearch={() => setSearch("")}
                                    fetchDepartementMutate={
                                        fetchDepartementMutate
                                    }
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
