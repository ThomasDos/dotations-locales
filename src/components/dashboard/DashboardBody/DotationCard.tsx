import {
    IconCopyWithSuccess,
    LabelGreyCustomCrossIcon,
    LabelPercentage,
} from "components/ui";
import type { Dotation } from "models/commune/commune.interface";
import { useSelector } from "react-redux";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

import SousDotationsContainer from "./SousDotationsContainer";

const StyledDotationCard = styled.div<{
    borderTop: boolean;
    backgroundColor: boolean;
}>`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid var(--blue-france-850);
    border-top: ${({ borderTop }) => (borderTop ? "" : "none")};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? "var(--blue-france-975)" : "none"};

    @media (min-width: 640px) {
        padding: 32px 48px 32px 32px;
    }
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

    @media (max-width: 640px) {
        text-align: center;
    }
`;

interface DotationCardProps {
    hasInformation?: boolean;
    dotation: Dotation;
    borderTop: boolean;
    backgroundColor?: boolean;
    handleClick?: () => void;
}

const DotationCard = ({
    dotation,
    // hasInformation = true,
    borderTop,
    handleClick,
    backgroundColor = false,
}: DotationCardProps) => {
    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);

    const currentYearDotation = dotation.annees[0][currentYear];
    const lastYearDotation = dotation.annees[1][lastYear];
    const dotationTotalFormatted = formatNumberWithSpace(currentYearDotation);

    const totalEvolution = currentYearDotation - lastYearDotation;
    const percentageEvolution = getPercentageEvolution(
        currentYearDotation,
        lastYearDotation
    );
    const { title, sousDotations } = dotation;

    return (
        <StyledDotationCard
            borderTop={borderTop}
            backgroundColor={backgroundColor}
        >
            <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                <div className="flex flex-col items-center sm:items-start">
                    <div className="flex">
                        <StyledCardTitle
                            className="mb-2 mr-1"
                            onClick={handleClick}
                        >
                            {title}
                        </StyledCardTitle>

                        {/* 
                        //TODO: réactiver quand feature info prête
                        {hasInformation && <IconInformation />} */}
                    </div>
                    <span>
                        Évolution du montant {lastYear} / {currentYear}.
                    </span>
                </div>
                {currentYearDotation ? (
                    <div className="flex flex-col sm:items-end">
                        <div className="flex mb-2">
                            <StyledSpanTotalNumber>
                                {dotationTotalFormatted} €
                            </StyledSpanTotalNumber>
                            <div className="hidden relative sm:flex items-center">
                                <div className="absolute r-0 ml-3">
                                    <IconCopyWithSuccess
                                        toCopy={currentYearDotation}
                                    />
                                </div>
                            </div>
                        </div>
                        {!!Math.round(totalEvolution) && (
                            <div className="flex items-center">
                                <span className="mr-2 whitespace-nowrap">{`${
                                    totalEvolution > 0 ? "+" : ""
                                } ${formatNumberWithSpace(
                                    totalEvolution
                                )}€`}</span>
                                <LabelPercentage
                                    percentage={percentageEvolution}
                                />
                            </div>
                        )}
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
