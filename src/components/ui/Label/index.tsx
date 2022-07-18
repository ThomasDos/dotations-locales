import { IconVectorDown, IconVectorUp } from "components/ui";
import styled from "styled-components";

interface LabelContainerProps {
    backgroundColor: "error-950" | "success-975";
}

const LabelContainer = styled.div<LabelContainerProps>`
    background: var(--${props => props.backgroundColor});
    padding: 6px 10px 8px;
    border-radius: 30px;
`;

interface LabelProps {
    percentage: number;
}

const Label = ({ percentage }: LabelProps) => {
    const percentageFormatted = String(percentage).replace(".", ",");
    const percentageIsPositive = percentage >= 0 ? "+" : "";
    return (
        <LabelContainer
            backgroundColor={percentageIsPositive ? "success-975" : "error-950"}
            className="text-sm flex"
        >
            {percentageIsPositive ? <IconVectorUp /> : <IconVectorDown />}
            <span className="ml-1 font-bold">
                {percentageIsPositive}
                {percentageFormatted}%
            </span>
        </LabelContainer>
    );
};

export default Label;
