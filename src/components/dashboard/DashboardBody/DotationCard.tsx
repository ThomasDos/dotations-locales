import { IconCopyWithSuccess, IconInformation, Label } from "components/ui";
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
    dotationTotal: number;
    hasInformation?: boolean;
    title: string;
    description: string;
    percentage: number;
}

const DotationCard = ({
    dotationTotal,
    title,
    description,
    percentage,
    hasInformation = true,
}: DotationCardProps) => {
    const dotationTotalFormatted = formatNumberWithSpace(dotationTotal);
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
            <div className="flex flex-col items-end">
                <div className="flex mb-2">
                    <SpanTotalNumber>
                        {dotationTotalFormatted} €
                    </SpanTotalNumber>
                    <div className="relative">
                        <div className="absolute r-0 ml-3 cursor-copy">
                            <IconCopyWithSuccess toCopy={dotationTotal} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2">+23 850€</span>
                    <Label percentage={percentage} />
                </div>
            </div>
        </DotationCardContainer>
    );
};

export default DotationCard;
