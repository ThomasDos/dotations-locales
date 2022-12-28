import { DotationsFormatedChartComparer } from "models/comparer/comparer.interface";
import { Fragment } from "react";
import {
    Bar,
    BarChart,
    Cell,
    LabelList,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import calculDyBarChart from "utils/calculDyBarChart";

interface BarChartComparerProps {
    dotations: DotationsFormatedChartComparer;
}

const BarChartComparer = ({ dotations }: BarChartComparerProps) => {
    const dotationsLength = dotations.length;
    const dy = calculDyBarChart(dotationsLength);

    return (
        <ResponsiveContainer width={"100%"} height={100 * dotations.length}>
            <BarChart
                barCategoryGap={20}
                layout="vertical"
                margin={{
                    bottom: 0,
                    left: 0,
                    right: 100,
                    top: 20,
                }}
                data={dotations}
            >
                <XAxis hide type="number" />
                <YAxis hide type="category" />
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="1" x2="1" y2="1">
                        <stop offset="10%" stopColor="#6A6AF4" />
                        <stop offset="100%" stopColor="#3737EE" />
                    </linearGradient>
                </defs>
                <Bar dataKey="value" fill="url(#colorUv)" radius={[6, 6, 6, 6]}>
                    {dotations.map(dotation => {
                        return (
                            <Fragment key={dotation?.label}>
                                {dotation?.communeTitleMain ? (
                                    <>
                                        <Cell />
                                    </>
                                ) : (
                                    <>
                                        <Cell fill="#E3E3FD" />
                                    </>
                                )}
                            </Fragment>
                        );
                    })}
                    <LabelList
                        dataKey="communeTitleMain"
                        position="insideLeft"
                        fill="#161616"
                        dy={dy}
                        width={350}
                        fontWeight={700}
                    />
                    <LabelList
                        dataKey="communeTitle"
                        position="insideLeft"
                        fill="#161616"
                        dy={dy}
                        width={350}
                        fontWeight={400}
                    />
                    <LabelList
                        dataKey="label"
                        position="right"
                        fill="#161616"
                        width={350}
                        dx={20}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComparer;
