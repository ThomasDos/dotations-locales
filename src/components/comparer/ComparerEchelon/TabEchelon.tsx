import useResize from "hooks/useResize";
import { DotationEchelonFormated } from "models/comparer/comparer.interface";
import { dotationsFormattedByTotalDotationsPopulationStrateEvolution } from "models/comparer/comparer.serializer";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Entities } from "store/entitiesComparer.slice";
import {
    selectCommuneEpciName,
    selectInitialCurrentYear,
    selectInitialLastYear,
} from "store/initialEntity.slice";
import styled from "styled-components";
import getHighestDotationByTotalDotations from "utils/getHighestDotationByTotalDotations";
import sliceEntitiesEchelonWithCurrentEntityPosition from "utils/sliceEntitiesEchelonWithCurrentEntityPosition";
import sortDotationsEchelonComparerByKey from "utils/sortDotationsEchelonComparerByKey";
import EchelonBoardRow from "./EchelonBoardRow";

const StyledTitleHover = styled.div`
    cursor: pointer;
    @media (min-width: 640px) {
        white-space: nowrap;
        margin-left: auto;
        width: min-content;
        &:hover {
            color: var(--blue-france-500);
            background-color: var(--blue-france-950);
            padding: 2px;
        }
    }
`;

const StyledColumHeaderEntityValue = styled.div<{ isSelected?: boolean }>`
    flex: 1;
    text-align: end;
    font-size: 12px;
    font-weight: ${({ isSelected }) => isSelected && "bold"};
    color: var(--grey-425);
    @media (min-width: 640px) {
        font-size: 14px;
    }
`;

const StyledDataRowContainer = styled.div`
    padding: 16px;
    @media (min-width: 640px) {
        padding: 32px;
    }
`;

interface TabEchelonProps {
    entities: Entities;
}

function TabEchelon({ entities }: TabEchelonProps) {
    const router = useRouter();
    const { windowWidth } = useResize();
    const { code } = router.query as {
        libelle: string;
        code: string;
    };

    const currentYear = useSelector(selectInitialCurrentYear);
    const lastYear = useSelector(selectInitialLastYear);
    const epciName = useSelector(selectCommuneEpciName);

    const [sortSelector, setSortSelector] =
        useState<keyof DotationEchelonFormated>("totalDotation");

    const [showFullList, setShowFullList] = useState(false);
    const handleToggleShowFullList = () => setShowFullList(!showFullList);
    const entitiesFormatted =
        dotationsFormattedByTotalDotationsPopulationStrateEvolution({
            entities,
            currentYear,
            lastYear,
        });

    const entitiesSorted = sortDotationsEchelonComparerByKey(
        entitiesFormatted,
        sortSelector
    );
    const highestDotationDgf =
        getHighestDotationByTotalDotations(entitiesSorted);

    const indexCurrentEntity = entitiesSorted.findIndex(
        entity => entity.code === code
    );

    const entitiesSliced = sliceEntitiesEchelonWithCurrentEntityPosition(
        entitiesSorted,
        indexCurrentEntity
    );

    const entitiesToDisplay = showFullList ? entitiesSorted : entitiesSliced;

    return (
        <div className="mt-10 border-[1px] border-grey-200">
            <div className="flex justify-between bg-grey-975 px-4 sm:px-8 py-2 sm:py-5 border-grey-200 border-b-[1px]">
                <div className="flex-[2] sm:flex-[3] md:flex-[4] text-sm sm:text-lg font-bold">
                    {epciName}
                </div>
                <StyledColumHeaderEntityValue />
                <StyledColumHeaderEntityValue
                    isSelected={sortSelector === "totalDotation"}
                >
                    <StyledTitleHover
                        onClick={() => {
                            setSortSelector("totalDotation");
                        }}
                    >
                        Total DGF
                    </StyledTitleHover>
                </StyledColumHeaderEntityValue>
                <StyledColumHeaderEntityValue
                    isSelected={sortSelector === "dotationDgfPerHabitant"}
                >
                    <StyledTitleHover
                        onClick={() => {
                            setSortSelector("dotationDgfPerHabitant");
                        }}
                    >
                        Par habitant
                    </StyledTitleHover>
                </StyledColumHeaderEntityValue>
                <StyledColumHeaderEntityValue
                    isSelected={sortSelector === "strate"}
                >
                    <StyledTitleHover
                        onClick={() => {
                            setSortSelector("strate");
                        }}
                    >
                        Strate
                    </StyledTitleHover>
                </StyledColumHeaderEntityValue>
                <StyledColumHeaderEntityValue
                    isSelected={sortSelector === "evolutionDotations"}
                >
                    <StyledTitleHover
                        onClick={() => {
                            setSortSelector("evolutionDotations");
                        }}
                    >
                        Evolution {windowWidth > 840 && "N-1"}
                    </StyledTitleHover>
                </StyledColumHeaderEntityValue>
            </div>
            <StyledDataRowContainer>
                {entitiesToDisplay.map(entity => (
                    <EchelonBoardRow
                        key={entity.libelle}
                        entity={entity}
                        highestDotationDgf={highestDotationDgf}
                        currentEntityCode={code}
                    />
                ))}

                {entities.length > 10 && (
                    <div
                        onClick={handleToggleShowFullList}
                        className="px-4 py-3 cursor-pointer text-sm flex justify-between hover:bg-grey-975"
                    >
                        <span>
                            {showFullList
                                ? "Montrer uniquement les communes les plus proches"
                                : `Afficher toutes les communes (${entitiesSorted.length})`}
                        </span>
                        <span className="font-bold">+</span>
                    </div>
                )}
            </StyledDataRowContainer>
        </div>
    );
}

export default TabEchelon;
