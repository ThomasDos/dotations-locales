import {
    IconCopyWithSuccess,
    IconInformation,
    LabelALetude,
    LabelGreyCustomCrossIcon,
    LabelPercentage,
} from "components/ui";
import type { Dotation } from "models/commune/commune.interface";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

const DotationCardContainer = styled.div`
    padding: 32px 48px 32px 32px;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--blue-france-850);
`;

const SpanTotalNumber = styled.span`
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
`;

const CardTitleContainer = styled.span`
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
`;

interface DotationCardProps {
    hasInformation?: boolean;
    dotation: Dotation;
}

const DotationCard = ({
    dotation,
    hasInformation = true,
}: DotationCardProps) => {
    const currentYearTotal = dotation.annees[0][new Date().getFullYear()];
    const lastYear = dotation.annees[1][new Date().getFullYear() - 1];
    const dotationTotalFormatted = formatNumberWithSpace(currentYearTotal);

    const totalEvolution = currentYearTotal - lastYear;
    const percentageEvolution = Number(
        ((currentYearTotal / lastYear - 1) * 100).toFixed(2)
    );
    const { title, description } = dotation;
    return (
        <DotationCardContainer>
            <div className="flex flex-col">
                <div className="flex">
                    <CardTitleContainer className="mb-2 mr-1">
                        {title}
                    </CardTitleContainer>
                    {hasInformation && (
                        <div className="cursor-help">
                            <IconInformation />
                        </div>
                    )}
                </div>
                <span>{description}</span>
            </div>
            {dotationTotalFormatted ? (
                <div className="flex flex-col items-end">
                    <div className="flex mb-2">
                        <SpanTotalNumber>
                            {dotationTotalFormatted} €
                        </SpanTotalNumber>
                        <div className="relative">
                            <div className="absolute r-0 ml-3 cursor-copy">
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
                            } ${totalEvolution}€`}</span>
                            <LabelPercentage percentage={percentageEvolution} />
                        </div>
                    ) : null}
                </div>
            ) : title.includes("DNP") ? (
                <LabelALetude />
            ) : (
                <LabelGreyCustomCrossIcon text="Non éligible" />
            )}
        </DotationCardContainer>
    );
};

export default DotationCard;
