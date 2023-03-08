import {
    IconCopyWithSuccess,
    IconInformation,
    LabelGreyCustomCrossIcon,
    LabelPercentage,
} from "components/ui";
import InfoDrawer from "components/ui/InfoDrawer";
import type { Dotation } from "models/entity/entity.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationEntity.slice";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import { RrfFormatted } from "utils/formatRrfEvolution";
import getPercentageEvolution from "utils/getPercentageEvolution";
import RrfContainer from "./RrfContainer";

import SousDotationsContainer from "./SousDotationsContainer";

const StyledDotationCard = styled.div<{
    borderTop: boolean;
    borderBottom: boolean;
    hasBackgroundColor: boolean;
}>`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #e6e6e6;
    border-top: ${({ borderTop }) => !borderTop && "none"};
    border-bottom: ${({ borderBottom }) => !borderBottom && "none"};
    background-color: ${({ hasBackgroundColor }) =>
        hasBackgroundColor && "var(--blue-france-975)"};

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

const StyledSpanNonEligible = styled.span`
    margin-right: 8px;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    color: var(--grey-625-425);
    margin-bottom: 8px;
`;

interface DotationCardProps {
    dotation: Dotation;
    borderTop: boolean;
    borderBottom?: boolean;
    hasBackgroundColor?: boolean;
    handleClick?: () => void;
    rrfFormatted?: RrfFormatted | null;
}

const DotationCard = ({
    dotation,
    borderTop,
    borderBottom = true,
    handleClick,
    hasBackgroundColor = false,
    rrfFormatted,
}: DotationCardProps) => {
    const [showInfoDrawer, setShowInfoDrawer] = useState(false);
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
        <>
            <StyledDotationCard
                borderTop={borderTop}
                borderBottom={borderBottom}
                hasBackgroundColor={hasBackgroundColor}
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

                            <IconInformation
                                //TODO: réactiver drawer quand texte présent
                                setShowDrawer={() => setShowInfoDrawer}
                            />
                        </div>
                        <span>
                            Évolution du montant {lastYear} / {currentYear}.
                        </span>
                    </div>
                    {currentYearDotation ? (
                        <div className="flex flex-col items-center sm:items-end">
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
                        <div className="flex flex-col items-center sm:items-end">
                            <StyledSpanNonEligible>0€</StyledSpanNonEligible>
                            <div className="flex">
                                {totalEvolution !== 0 && (
                                    <div className="flex items-center mr-2">
                                        {formatNumberWithSpace(totalEvolution)}€
                                    </div>
                                )}
                                <LabelGreyCustomCrossIcon text="Non éligible" />
                            </div>
                        </div>
                    )}
                </div>

                {sousDotations && (
                    <SousDotationsContainer sousDotations={sousDotations} />
                )}
            </StyledDotationCard>
            {!!rrfFormatted && <RrfContainer rrfFormatted={rrfFormatted} />}
            <InfoDrawer
                showInfoDrawer={showInfoDrawer}
                setShowInfoDrawer={setShowInfoDrawer}
                dotation={dotation}
            />
        </>
    );
};

export default DotationCard;
