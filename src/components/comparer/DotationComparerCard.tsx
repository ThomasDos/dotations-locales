import { DotationsFormatedChartComparer } from "models/comparer/comparer.interface";
import styled from "styled-components";
import sortDotationsChartDescending from "utils/sortDotationsChartDescending";
import BarChartComparer from "./BarChartComparer";

const StyledBarChartComparerContainer = styled.div`
    @media (min-width: 640px) {
        border: 1px solid var(--blue-france-850);
        padding: 32px 48px 18px 32px;
    }
    margin-top: 40px;
    margin-bottom: 120px;
`;

interface DotationComparerCardProps {
    dotationsChart: DotationsFormatedChartComparer;
    title: string;
    subtitle: string;
}

const DotationComparerCard = ({
    dotationsChart,
    title,
    subtitle,
}: DotationComparerCardProps) => {
    const dotationsChartSortedDescending =
        sortDotationsChartDescending(dotationsChart);
    return (
        <StyledBarChartComparerContainer>
            <div className="text-xl md:text-2xl font-bold mb-1">{title}</div>
            <div className="mb-5 md:mb-10">{subtitle}</div>
            <div className="mb-5 md:mb-10">
                <BarChartComparer dotations={dotationsChartSortedDescending} />
            </div>
        </StyledBarChartComparerContainer>
    );
};

export default DotationComparerCard;
