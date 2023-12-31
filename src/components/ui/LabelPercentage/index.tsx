import { IconVectorDown, IconVectorUp } from "components/ui";
import { useMemo } from "react";
import styled from "styled-components";

type BackgroundColorLabel =
    | "blue-france-950"
    | "error-950"
    | "success-975"
    | "";

interface LabelContainerProps {
    backgroundColor: BackgroundColorLabel;
}

const StyledLabel = styled.div<LabelContainerProps>`
    background: var(--${props => props.backgroundColor});
    padding: 6px 10px 8px;
    border-radius: 30px;
`;

interface LabelProps {
    percentage: number | null;
    valeur?: string;
    hasBackgroundColor?: boolean;
    textBold?: boolean;
    showPercentageEvolution?: boolean;
}

const LabelPercentage = ({
    percentage,
    valeur,
    hasBackgroundColor = true,
    textBold = true,
    showPercentageEvolution = false,
}: LabelProps) => {
    const percentageFormatted = String(percentage).replace(".", ",");
    const percentageLabelData: {
        backgroundColor: BackgroundColorLabel;
        icon: JSX.Element | null;
        startUnit: string;
    } = useMemo(() => {
        if (percentage === null) {
            return {
                backgroundColor: "blue-france-950",
                icon: null,
                startUnit: "",
            };
        }

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

    const textLabel = useMemo(() => {
        if (valeur) {
            return valeur;
        }
        if (!Number.isFinite(percentage)) {
            return null;
        }
        return `${percentageLabelData.startUnit}${percentageFormatted}%`;
    }, [valeur, percentage]);

    if (percentage === null && !valeur) return null;

    return (
        <StyledLabel
            backgroundColor={
                hasBackgroundColor ? percentageLabelData.backgroundColor : ""
            }
            className="text-sm flex items-center"
        >
            <div>{percentageLabelData.icon}</div>
            <span
                className={`ml-1 whitespace-nowrap ${textBold && "font-bold"}`}
            >
                {textLabel}
                {!!percentage &&
                    showPercentageEvolution &&
                    ` (${percentage > 0 ? "+" : ""}${percentage.toFixed(2)}%)`}
            </span>
        </StyledLabel>
    );
};

export default LabelPercentage;
