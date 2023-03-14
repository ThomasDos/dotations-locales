import { dotationsDgfBoardPopulationsSerializer } from "models/comparer/comparer.serializer";
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

export default function ComparerDgfBoardPerHabitant() {
    const entities = useSelector(selectEntities);
    const year = useSelector(selectInitialCurrentYear);

    const dotationsDgfBoardPopulations = dotationsDgfBoardPopulationsSerializer(
        entities,
        year
    );
    const dotationsDgfBoardPopulationsDescending =
        dotationsDgfBoardPopulations.sort(
            (a, b) =>
                +(b.values[2] as string).split("K")[0].replace(" ", "") -
                +(a.values[2] as string).split("K")[0].replace(" ", "")
        );

    const { labels } = dotationsDgfBoardPopulationsDescending[0];

    return (
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
                                        {isNaN(+value)
                                            ? value
                                            : formatNumberWithSpace(+value)}
                                    </StyledBodyBoardRowValue>
                                ))}
                            </StyledBodyBoardRowValues>
                        </StyledBodyBoardRow>
                    );
                }
            )}
        </>
    );
}
