import { DotationFormattedChartComparer } from "models/comparer/comparer.interface";
import { dotationsDgfBoardSerializer } from "models/comparer/comparer.serializer";
import { useSelector } from "react-redux";
import { selectEntities } from "store/entitiesComparer.slice";
import { selectInitialCurrentYear } from "store/initialEntity.slice";

import formatNumberWithSpace from "utils/formatNumberWithSpace";
import {
    StyledBodyBoardCol,
    StyledBodyBoardHeader,
    StyledBodyBoardHeaderCol,
    StyledBodyBoardHeaderTitle,
    StyledBodyBoardRow,
    StyledBodyBoardRowDescription,
    StyledBodyBoardRowValue,
    StyledBodyBoardRowValues,
} from "./ComparerDgfBoardComponents";

export default function ComparerDgfBoard() {
    const entities = useSelector(selectEntities);
    const year = useSelector(selectInitialCurrentYear);

    const dotationsDgfBoard = dotationsDgfBoardSerializer(entities, year);
    const dotationsDgfBoardDescending = dotationsDgfBoard.sort(
        (a, b) => b.totalDotations - a.totalDotations
    );

    const { dotations: dotationsToGetLabels } = dotationsDgfBoardDescending[0];

    return (
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
                                ({ value }: DotationFormattedChartComparer) => (
                                    <StyledBodyBoardRowValue
                                        key={value}
                                        hasValue={!!value}
                                    >
                                        {formatNumberWithSpace(value / 1000)}
                                        K€
                                    </StyledBodyBoardRowValue>
                                )
                            )}
                        </StyledBodyBoardRowValues>
                    </StyledBodyBoardRow>
                );
            })}
        </>
    );
}
