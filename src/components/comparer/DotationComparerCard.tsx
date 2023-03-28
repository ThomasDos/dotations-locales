import { DotationsFormattedChartComparer } from "models/comparer/comparer.interface";
import { useSelector } from "react-redux";
import { selectIsCommune } from "store/appSettings.slice";
import styled from "styled-components";
import sortDotationsChartDescending from "utils/sortDotationsChartDescending";
import BarChartComparer from "./BarChartComparer";
import ComparerDgfBoardContainer from "./ComparerDgfBoardContainer";

const StyledBarChartComparerContainer = styled.div<{
    isSousDotation?: boolean;
}>`
    @media (min-width: 640px) {
        border: 1px solid var(--blue-france-850);
        padding: 32px 48px 18px 32px;
    }
    margin-top: ${({ isSousDotation }) => (isSousDotation ? "10px" : "40px")};
    margin-bottom: 40px;
`;

interface DotationComparerCardProps {
    dotationsChart: DotationsFormattedChartComparer;
    title: string;
    subtitle: string;
    isSousDotation?: boolean;
    isDGF?: boolean;
    boardPerHabitant?: boolean;
}

const DotationComparerCard = ({
    dotationsChart,
    title,
    subtitle,
    isSousDotation,
    isDGF,
    boardPerHabitant,
}: DotationComparerCardProps) => {
    const dotationsChartSortedDescending =
        sortDotationsChartDescending(dotationsChart);
    const isCommune = useSelector(selectIsCommune);
    return (
        <StyledBarChartComparerContainer isSousDotation={isSousDotation}>
            <div className="text-xl md:text-2xl font-bold mb-1">{title}</div>
            <div className="mb-5 md:mb-10">{subtitle}</div>
            <div className="mb-5 md:mb-10">
                <BarChartComparer dotations={dotationsChartSortedDescending} />
            </div>
            {isDGF && isCommune && (
                <ComparerDgfBoardContainer
                    boardPerHabitant={boardPerHabitant}
                />
            )}
        </StyledBarChartComparerContainer>
    );
};

export default DotationComparerCard;
