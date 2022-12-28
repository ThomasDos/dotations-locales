import { Dotation } from "models/commune/commune.interface";
import { DotationsFormatedChartComparer } from "models/comparer/comparer.interface";
import { dotationsChartComparerSerializer } from "models/comparer/comparer.serializer";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCommunes } from "store/communesComparer.slice";
import { selectInitialCurrentYear } from "store/initialCommune.slice";
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

interface BarChartComparerProps {
    title: string;
    subtitle: string;
    dotation: Dotation;
    isDGF?: boolean;
}

const TabComparer = ({
    title,
    subtitle,
    dotation,
    isDGF,
}: BarChartComparerProps) => {
    const communes = useSelector(selectCommunes);
    const currentYear = useSelector(selectInitialCurrentYear);
    const dotationsChart: DotationsFormatedChartComparer = useMemo(() => {
        if (isDGF) {
            return [];
        }
        return dotationsChartComparerSerializer(
            communes,
            currentYear,
            dotation
        ) as DotationsFormatedChartComparer;
    }, [communes]);

    const dotationsChartSortedDescending =
        sortDotationsChartDescending(dotationsChart);

    return (
        <StyledBarChartComparerContainer>
            <div className="text-xl md:text-2xl font-bold mb-1">{title}</div>
            <div className="mb-5 md:mb-10">{subtitle}</div>
            <div className="mb-5 md:mb-10">
                {!!dotationsChart.length && (
                    <BarChartComparer
                        dotations={dotationsChartSortedDescending}
                    />
                )}
            </div>
        </StyledBarChartComparerContainer>
    );
};

export default TabComparer;
