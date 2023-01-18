import { TagData } from "components/ui";
import useResize from "hooks/useResize";
import {
    HistoriqueDotation,
    HistoriqueDotations,
} from "models/historique/historique.interface";

import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

const StyledHistoriqueBoard = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    border: 1px solid var(--blue-france-850);
    padding: 4px;
    @media (min-width: 640px) {
        padding: 32px 48px 56px 32px;
    }
`;

const StyledBodyBoardHeader = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    border-bottom: solid 1px var(--blue-france-925);
    align-items: center;
    @media (min-width: 640px) {
        padding: 12px 16px;
    }
`;
const StyledBodyBoardHeaderTitle = styled.div`
    font-weight: 700;
    flex: 2;
    @media (min-width: 640px) {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0em;
    }
`;
const StyledBodyBoardHeaderAnnees = styled.div`
    display: flex;
    flex: 3;
    @media (min-width: 640px) {
        flex: 1;
    }
`;
const StyledBodyBoardHeaderAnnee = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--grey-425);
    flex: 1;
    text-align: right;
`;
const StyledBodyBoardRow = styled.div<{ isLastRow?: boolean }>`
    display: flex;
    justify-content: space-between;
    border-bottom: ${({ isLastRow }) =>
        isLastRow ? "" : "1px solid var(--grey-925)"};
    padding: 8px;
    @media (min-width: 640px) {
        padding: 16px 8px 16px 16px;
    }
`;
const StyledBodyBoardRowDescription = styled.div`
    flex: 2;
    @media (max-width: 640px) {
        font-size: 14px;
    }
`;

const StyledBodyBoardRowAnnees = styled.div`
    display: flex;
    flex: 3;
    justify-content: space-around;
    white-space: nowrap;
    @media (min-width: 640px) {
        flex: 1;
    }
`;
const StyledBodyBoardRowAnnee = styled.div`
    flex: 1;
    text-align: right;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0em;
`;

interface HistoriqueBoardProps {
    historiqueData: HistoriqueDotations;
    dotationTitle: string;
    dotationLabel: string;
}

export default function HistoriqueBoard({
    historiqueData,
    dotationTitle,
    dotationLabel,
}: HistoriqueBoardProps) {
    const { windowWidth } = useResize();
    return (
        <StyledHistoriqueBoard>
            <StyledBodyBoardHeader>
                <StyledBodyBoardHeaderTitle>
                    {windowWidth > 640 ? dotationTitle : dotationLabel}
                </StyledBodyBoardHeaderTitle>
                <StyledBodyBoardHeaderAnnees>
                    {historiqueData.map(({ year }: HistoriqueDotation) => (
                        <StyledBodyBoardHeaderAnnee key={year}>
                            {year}
                        </StyledBodyBoardHeaderAnnee>
                    ))}
                </StyledBodyBoardHeaderAnnees>
            </StyledBodyBoardHeader>
            <StyledBodyBoardRow>
                <StyledBodyBoardRowDescription>
                    Montant {dotationLabel}
                </StyledBodyBoardRowDescription>
                <StyledBodyBoardRowAnnees>
                    {historiqueData.map(
                        ({ value, year }: HistoriqueDotation) => (
                            <StyledBodyBoardRowAnnee
                                key={year}
                                className="font-bold"
                            >
                                {formatNumberWithSpace(value)}€
                            </StyledBodyBoardRowAnnee>
                        )
                    )}
                </StyledBodyBoardRowAnnees>
            </StyledBodyBoardRow>
            <StyledBodyBoardRow>
                <StyledBodyBoardRowDescription>
                    Evolution {dotationLabel}
                </StyledBodyBoardRowDescription>
                <StyledBodyBoardRowAnnees>
                    {historiqueData.map(
                        (annee: HistoriqueDotation, index: number) => {
                            const evolutionAnnee =
                                !!annee.value &&
                                annee.value - historiqueData[index - 1]?.value;

                            return (
                                <StyledBodyBoardRowAnnee key={annee.year}>
                                    {!!index &&
                                        !!evolutionAnnee &&
                                        `${
                                            evolutionAnnee > 0 ? "+" : ""
                                        } ${formatNumberWithSpace(
                                            evolutionAnnee
                                        )}€`}
                                </StyledBodyBoardRowAnnee>
                            );
                        }
                    )}
                </StyledBodyBoardRowAnnees>
            </StyledBodyBoardRow>
            <StyledBodyBoardRow isLastRow>
                <StyledBodyBoardRowDescription>
                    Evolution de la commune %
                </StyledBodyBoardRowDescription>
                <StyledBodyBoardRowAnnees>
                    {historiqueData.map(
                        (annee: HistoriqueDotation, index: number) => {
                            const evolutionAnnee =
                                historiqueData[index - 1]?.value &&
                                getPercentageEvolution(
                                    annee.value,
                                    historiqueData[index - 1]?.value
                                );

                            return (
                                <StyledBodyBoardRowAnnee key={annee.year}>
                                    {!!index && !!evolutionAnnee && (
                                        <TagData
                                            position="end"
                                            percentage={Number(
                                                evolutionAnnee.toFixed(2)
                                            )}
                                            valeur={`${evolutionAnnee.toFixed(
                                                2
                                            )}%`}
                                        />
                                    )}
                                </StyledBodyBoardRowAnnee>
                            );
                        }
                    )}
                </StyledBodyBoardRowAnnees>
            </StyledBodyBoardRow>
        </StyledHistoriqueBoard>
    );
}
