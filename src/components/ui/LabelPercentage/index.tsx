import { IconVectorDown, IconVectorUp } from "components/ui";
import styled from "styled-components";

interface LabelContainerProps {
    backgroundColor: "error-950" | "success-975";
}

const StyledLabel = styled.div<LabelContainerProps>`
    background: var(--${props => props.backgroundColor});
    padding: 6px 10px 8px;
    border-radius: 30px;
`;

interface LabelProps {
    percentage: number;
    valeur?: string;
}

const LabelPercentage = ({ percentage, valeur }: LabelProps) => {
    const percentageFormatted = String(percentage).replace(".", ",");
    const percentageIsPositive = percentage >= 0;
    const textLabel = valeur
        ? valeur
        : `${percentageIsPositive ? "+" : ""}${percentageFormatted}%`;

    return (
        <StyledLabel
            backgroundColor={percentageIsPositive ? "success-975" : "error-950"}
            className="text-sm flex"
        >
            {percentageIsPositive ? <IconVectorUp /> : <IconVectorDown />}
            <span className="ml-1 font-bold">{textLabel}</span>
        </StyledLabel>
    );
};

export default LabelPercentage;
