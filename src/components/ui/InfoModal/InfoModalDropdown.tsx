import { Collapse } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const StyledDropdownContainer = styled.div<{ lastRow?: boolean }>`
    border-top: 1px solid var(--grey-925);
    padding: 12px 0;
    border-bottom: ${({ lastRow }) => lastRow && "1px solid var(--grey-925);"};
`;
const StyledDropdownTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

interface InfoModalDropdownProps {
    title: string;
    lastRow?: boolean;
}
export default function InfoModalDropdown({
    title,
    lastRow,
}: InfoModalDropdownProps) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <StyledDropdownContainer lastRow={lastRow}>
            <StyledDropdownTitle onClick={() => setShowInfo(!showInfo)}>
                <div>{title}</div>
                <div className="font-bold text-lg pr-1">
                    {showInfo ? "-" : "+"}
                </div>
            </StyledDropdownTitle>

            <Collapse in={showInfo}>
                <div className="pt-2 pl-2 text-sm"> COLLAPSE HERE</div>
            </Collapse>
        </StyledDropdownContainer>
    );
}
