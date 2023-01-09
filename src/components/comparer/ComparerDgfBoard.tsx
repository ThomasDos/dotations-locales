import { DotationFormattedChartComparer } from "models/comparer/comparer.interface";
import { dotationsDgfBoardSerializer } from "models/comparer/comparer.serializer";
import { useSelector } from "react-redux";
import { selectCommunes } from "store/communesComparer.slice";
import { selectInitialCurrentYear } from "store/initialCommune.slice";

import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

const StyledContainer = styled.div`
    margin-bottom: 20px;
    @media (min-width: 640px) {
        margin-bottom: 40px;
    }
`;

const StyledBodyBoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px var(--blue-france-925);
    align-items: center;
`;
const StyledBodyBoardHeaderTitle = styled.div`
    font-weight: 700;
    flex: 2;
    @media (min-width: 640px) {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0em;
        flex: 1;
    }
`;
const StyledBodyBoardHeaderCol = styled.div`
    display: flex;
    flex: 3;
    @media (min-width: 640px) {
        flex: 2;
    }
`;
const StyledBodyBoardCol = styled.div`
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
    padding: 8px 0;
    @media (min-width: 640px) {
        padding: 16px 0;
    }
`;
const StyledBodyBoardRowDescription = styled.div`
    flex: 2;
    @media (max-width: 640px) {
        font-size: 14px;
    }
    @media (min-width: 640px) {
        flex: 1;
    }
`;

const StyledBodyBoardRowValues = styled.div`
    display: flex;
    flex: 3;
    white-space: nowrap;
    @media (min-width: 640px) {
        flex: 2;
    }
`;
const StyledBodyBoardRowValue = styled.div<{ hasValue: boolean }>`
    flex: 1;
    text-align: right;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0em;
    color: ${({ hasValue }) => !hasValue && "var(--grey-625-425)"};

    @media (min-width: 640px) {
        font-size: 14px;
    }
`;

export default function ComparerDgfBoard() {
    const communes = useSelector(selectCommunes);
    const year = useSelector(selectInitialCurrentYear);

    const dotationsDgfBoard = dotationsDgfBoardSerializer(communes, year);
    const dotationsDgfBoardDescending = dotationsDgfBoard.sort(
        (a, b) => b.totalDotations - a.totalDotations
    );

    const { dotations: dotationsToGetLabels } = dotationsDgfBoardDescending[0];

    return (
        <StyledContainer>
            <>
                <StyledBodyBoardHeader>
                    <StyledBodyBoardHeaderTitle>
                        Communes
                    </StyledBodyBoardHeaderTitle>
                    <StyledBodyBoardHeaderCol>
                        {dotationsToGetLabels.map(
                            ({ label }: DotationFormattedChartComparer) => (
                                <StyledBodyBoardCol key={label}>
                                    {label}
                                </StyledBodyBoardCol>
                            )
                        )}
                    </StyledBodyBoardHeaderCol>
                </StyledBodyBoardHeader>

                {dotationsDgfBoardDescending.map((dotationDgfBoard, index) => {
                    const lastIndex = dotationsDgfBoardDescending.length - 1;
                    const { titleRow, dotations } = dotationDgfBoard;
                    return (
                        <StyledBodyBoardRow
                            key={titleRow}
                            isLastRow={lastIndex === index}
                        >
                            <StyledBodyBoardRowDescription>
                                {titleRow}
                            </StyledBodyBoardRowDescription>
                            <StyledBodyBoardRowValues>
                                {dotations.map(
                                    ({
                                        value,
                                    }: DotationFormattedChartComparer) => (
                                        <StyledBodyBoardRowValue
                                            key={value}
                                            hasValue={!!value}
                                        >
                                            {formatNumberWithSpace(
                                                value / 1000
                                            )}
                                            K€
                                        </StyledBodyBoardRowValue>
                                    )
                                )}
                            </StyledBodyBoardRowValues>
                        </StyledBodyBoardRow>
                    );
                })}
            </>
        </StyledContainer>
    );
}
