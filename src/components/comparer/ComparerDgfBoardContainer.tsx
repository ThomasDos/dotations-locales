import { Collapse } from "@mui/material";
import { useState } from "react";
import ComparerDgfBoard from "./ComparerDgfBoard";
import ComparerDgfBoardPerHabitant from "./ComparerDgfBoardPerHabitant";
import TitleCollapseDetails from "./TitleCollapseDetails";

interface ComparerDgfBoardContainerProps {
    boardPerHabitant?: boolean;
}

const ComparerDgfBoardContainer = ({
    boardPerHabitant,
}: ComparerDgfBoardContainerProps) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <TitleCollapseDetails
                setShowDetails={setShowDetails}
                showDetails={showDetails}
            />
            <Collapse in={showDetails}>
                {boardPerHabitant ? (
                    <ComparerDgfBoardPerHabitant />
                ) : (
                    <ComparerDgfBoard />
                )}
            </Collapse>
        </>
    );
};

export default ComparerDgfBoardContainer;
