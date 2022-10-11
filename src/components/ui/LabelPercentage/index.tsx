import { IconVectorDown, IconVectorUp } from "components/ui";
import { useMemo } from "react";
import styled from "styled-components";

type BackgroundColorLabel = "blue-france-950" | "error-950" | "success-975";

interface LabelContainerProps {
    backgroundColor: BackgroundColorLabel;
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
    const percentageLabelData: {
        backgroundColor: BackgroundColorLabel;
        icon: JSX.Element | null;
        startUnit: string;
    } = useMemo(() => {
        if (percentage > 0) {
            return {
                backgroundColor: "success-975",
                icon: <IconVectorUp />,
                startUnit: "+",
            };
        }

        if (percentage < 0) {
            return {
                backgroundColor: "error-950",
                icon: <IconVectorDown />,
                startUnit: "",
            };
        }

        return {
            backgroundColor: "blue-france-950",
            icon: null,
            startUnit: "",
        };
    }, [percentage]);

    const textLabel = valeur
        ? valeur
        : `${percentageLabelData.startUnit}${percentageFormatted}%`;

    return (
        <StyledLabel
            backgroundColor={percentageLabelData.backgroundColor}
            className="text-sm flex"
        >
            {percentageLabelData.icon}
            <span className="ml-1 font-bold">{textLabel}</span>
        </StyledLabel>
    );
};

export default LabelPercentage;
