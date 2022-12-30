import { dotationsDgfBoardPopulationsSerializer } from "models/comparer/comparer.serializer";
import { useSelector } from "react-redux";
import { selectCommunes } from "store/communesComparer.slice";
import { selectInitialCurrentYear } from "store/initialCommune.slice";

import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

const StyledContainer = styled.div`
    margin-bottom: 40px;
    @media (min-width: 640px) {
        margin-bottom: 120px;
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

export default function ComparerDgfBoardPerHabitant() {
    const communes = useSelector(selectCommunes);
    const year = useSelector(selectInitialCurrentYear);

    const dotationsDgfBoardPopulations = dotationsDgfBoardPopulationsSerializer(
        communes,
        year
    );
    const dotationsDgfBoardPopulationsDescending =
        dotationsDgfBoardPopulations.sort((a, b) => b.values[0] - a.values[0]);

    const { labels } = dotationsDgfBoardPopulationsDescending[0];

    return (
        <StyledContainer>
            <>
                <StyledBodyBoardHeader>
                    <StyledBodyBoardHeaderTitle>
                        Communes
                    </StyledBodyBoardHeaderTitle>
                    <StyledBodyBoardHeaderCol>
                        {labels.map(label => (
                            <StyledBodyBoardCol key={label}>
                                {label}
                            </StyledBodyBoardCol>
                        ))}
                    </StyledBodyBoardHeaderCol>
                </StyledBodyBoardHeader>

                {dotationsDgfBoardPopulationsDescending.map(
                    (dotationDgfBoard, index) => {
                        const lastIndex =
                            dotationsDgfBoardPopulationsDescending.length - 1;
                        const { titleRow, values } = dotationDgfBoard;
                        return (
                            <StyledBodyBoardRow
                                key={titleRow}
                                isLastRow={lastIndex === index}
                            >
                                <StyledBodyBoardRowDescription>
                                    {titleRow}
                                </StyledBodyBoardRowDescription>
                                <StyledBodyBoardRowValues>
                                    {values.map(value => (
                                        <StyledBodyBoardRowValue
                                            key={value}
                                            hasValue={!!value}
                                        >
                                            {formatNumberWithSpace(value)}
                                        </StyledBodyBoardRowValue>
                                    ))}
                                </StyledBodyBoardRowValues>
                            </StyledBodyBoardRow>
                        );
                    }
                )}
            </>
        </StyledContainer>
    );
}
