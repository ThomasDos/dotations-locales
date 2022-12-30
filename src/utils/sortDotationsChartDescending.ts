import { DotationsFormattedChartComparer } from "models/comparer/comparer.interface";

const sortDotationsChartDescending = (
    dotationsChart: DotationsFormattedChartComparer
): DotationsFormattedChartComparer => {
    return dotationsChart.sort((a, b) => b.value - a.value);
};

export default sortDotationsChartDescending;
