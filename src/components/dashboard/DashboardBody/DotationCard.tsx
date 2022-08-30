import {
    IconCopyWithSuccess,
    IconInformation,
    LabelGreyCustomCrossIcon,
    LabelPercentage,
} from "components/ui";
import type { Dotation } from "models/commune/commune.interface";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

import SousDotationsContainer from "./SousDotationsContainer";

const StyledDotationCard = styled.div<{
    borderTop: boolean;
    backgroundColor: boolean;
}>`
    padding: 32px 48px 32px 32px;
    display: flex;
    flex-direction: column;

    border: 1px solid var(--blue-france-850);
    border-top: ${({ borderTop }) => (borderTop ? "" : "none")};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? "var(--blue-france-975)" : "none"};
`;

const StyledSpanTotalNumber = styled.span`
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
`;

const StyledCardTitle = styled.span`
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
`;

interface DotationCardProps {
    hasInformation?: boolean;
    dotation: Dotation;
    borderTop: boolean;
    backgroundColor?: boolean;
}

const DotationCard = ({
    dotation,
    hasInformation = true,
    borderTop,
    backgroundColor = false,
}: DotationCardProps) => {
    const currentYearTotal = dotation.annees[0][new Date().getFullYear()];
    const lastYear = dotation.annees[1][new Date().getFullYear() - 1];
    const dotationTotalFormatted = formatNumberWithSpace(currentYearTotal);

    const totalEvolution = currentYearTotal - lastYear;
    const percentageEvolution = getPercentageEvolution(
        currentYearTotal,
        lastYear
    );
    const { title, description, sousDotations } = dotation;

    return (
        <StyledDotationCard
            borderTop={borderTop}
            backgroundColor={backgroundColor}
        >
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <StyledCardTitle className="mb-2 mr-1">
                            {title}
                        </StyledCardTitle>
                        {hasInformation && (
                            <div className="cursor-help">
                                <IconInformation />
                            </div>
                        )}
                    </div>
                    <span>{description}</span>
                </div>
                {currentYearTotal ? (
                    <div className="flex flex-col items-end">
                        <div className="flex mb-2">
                            <StyledSpanTotalNumber>
                                {dotationTotalFormatted} €
                            </StyledSpanTotalNumber>
                            <div className="relative flex items-center">
                                <div className="absolute r-0 ml-3">
                                    <IconCopyWithSuccess
                                        toCopy={currentYearTotal}
                                    />
                                </div>
                            </div>
                        </div>
                        {totalEvolution ? (
                            <div className="flex items-center">
                                <span className="mr-2">{`${
                                    totalEvolution > 0 ? "+" : ""
                                } ${formatNumberWithSpace(
                                    totalEvolution
                                )}€`}</span>
                                <LabelPercentage
                                    percentage={percentageEvolution}
                                />
                            </div>
                        ) : null}
                    </div>
                ) : (
                    <div>
                        <LabelGreyCustomCrossIcon text="Non éligible" />
                    </div>
                )}
            </div>

            {sousDotations && (
                <SousDotationsContainer sousDotations={sousDotations} />
            )}
        </StyledDotationCard>
    );
};

export default DotationCard;
