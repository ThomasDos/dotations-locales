import arrayCommunes from "__fixtures__/arrayCommunes";
import useResize from "hooks/useResize";
import { DotationEchelonFormated } from "models/comparer/comparer.interface";
import { dotationsFormattedByTotalDotationsPopulationStrateEvolution } from "models/comparer/comparer.serializer";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
    selectInitialCurrentYear,
    selectInitialEntity,
    selectInitialLastYear,
} from "store/initialEntity.slice";
import styled from "styled-components";
import getHighestDotationByTotalDotations from "utils/getHighestDotationByTotalDotations";
import serializeEntities from "utils/serializeEntities";
import sliceEntitiesEchelonWithCurrentEntityPosition from "utils/sliceEntitiesEchelonWithCurrentEntityPosition";
import sortDotationsEchelonComparerByKey from "utils/sortDotationsEchelonComparerByKey";
import EchelonBoardRow from "./EchelonBoardRow";

const StyledContainerEchelon = styled.div`
    border: 1px solid var(--blue-france-850);
    padding: 16px;
    margin-top: 40px;
    @media (min-width: 640px) {
        padding: 32px 48px 56px 32px;
    }
`;

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

function TabEchelon() {
    const router = useRouter();
    const { windowWidth } = useResize();
    const { libelle } = router.query as {
        libelle: string;
        code: string;
    };

    const currentEntity = useSelector(selectInitialEntity);
    const currentYear = useSelector(selectInitialCurrentYear);
    const lastYear = useSelector(selectInitialLastYear);
    const [sortSelector, setSortSelector] =
        useState<keyof DotationEchelonFormated>("totalDotation");
    //TODO: utiliser vrai data du back
    const entitiesDepartement = [
        ...serializeEntities(arrayCommunes).filter(
            entity => entity.libelle !== libelle
        ),
        { ...currentEntity, libelle },
    ];

    const [showFullList, setShowFullList] = useState(false);
    const handleToggleShowFullList = () => setShowFullList(!showFullList);
    const entitiesFormatted =
        dotationsFormattedByTotalDotationsPopulationStrateEvolution({
            entities: entitiesDepartement,
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
        entity => entity.libelle === libelle
    );

    const entitiesSliced = sliceEntitiesEchelonWithCurrentEntityPosition(
        entitiesSorted,
        indexCurrentEntity
    );

    const entitiesToDisplay = showFullList ? entitiesSorted : entitiesSliced;

    return (
        <StyledContainerEchelon>
            <div className="flex justify-between p-1 md:p-4">
                <div className="flex-[2] sm:flex-[3] md:flex-[4] sm:text-lg font-bold">
                    {entitiesSorted.length} communes
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

            {entitiesToDisplay.map(entity => (
                <EchelonBoardRow
                    key={entity.libelle}
                    entity={entity}
                    highestDotationDgf={highestDotationDgf}
                    libelle={libelle}
                />
            ))}

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
        </StyledContainerEchelon>
    );
}

export default TabEchelon;
