import warningMessages from "constants/warningMessages";
import styled from "styled-components";

const StyledWarningDefaultMessage = styled.div<{ backgroundColor?: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface WarningDefaultMessageProps {
    backgroundColor?: string;
    containerClassName?: string;
}

export default function WarningDefaultMessage({
    backgroundColor,
    containerClassName,
}: WarningDefaultMessageProps) {
    return (
        <StyledWarningDefaultMessage
            backgroundColor={backgroundColor}
            className={containerClassName}
        >
            <div className="text-error-425 font-bold mb-1">
                {warningMessages.precisionSimulation.default.title}
            </div>
            <div className="text-sm">
                {warningMessages.precisionSimulation.default.text}
            </div>
        </StyledWarningDefaultMessage>
    );
}
