import { Accordion, AccordionItem } from "@dataesr/react-dsfr";
import ComparerDgfBoard from "./ComparerDgfBoard";
import ComparerDgfBoardPerHabitant from "./ComparerDgfBoardPerHabitant";

interface ComparerDgfBoardContainerProps {
    boardPerHabitant?: boolean;
}

const ComparerDgfBoardContainer = ({
    boardPerHabitant,
}: ComparerDgfBoardContainerProps) => {
    return (
        <Accordion>
            <AccordionItem title="Données par communes">
                {boardPerHabitant ? (
                    <ComparerDgfBoardPerHabitant />
                ) : (
                    <ComparerDgfBoard />
                )}
            </AccordionItem>
        </Accordion>
    );
};

export default ComparerDgfBoardContainer;
