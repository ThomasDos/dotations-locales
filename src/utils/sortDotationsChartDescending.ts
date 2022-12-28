import { DotationsFormatedChartComparer } from "models/comparer/comparer.interface";

const sortDotationsChartDescending = (
    dotationsChart: DotationsFormatedChartComparer
): DotationsFormatedChartComparer => {
    return dotationsChart.sort((a, b) => b.value - a.value);
};

export default sortDotationsChartDescending;
