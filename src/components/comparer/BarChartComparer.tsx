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

interface BarChartComparerProps {
    dotations: DotationsFormatedChartComparer;
}

const BarChartComparer = ({ dotations }: BarChartComparerProps) => {
    return (
        <ResponsiveContainer width={"100%"} height={50 * dotations.length}>
            <BarChart
                layout="vertical"
                margin={{
                    bottom: 0,
                    left: 0,
                    right: 100,
                    top: 0,
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
                <Bar
                    minPointSize={150}
                    dataKey="value"
                    fill="url(#colorUv)"
                    radius={[6, 6, 6, 6]}
                    height={50}
                >
                    {dotations.map(dotation => {
                        return (
                            <Fragment key={dotation?.label}>
                                {!dotation?.barTitle ? (
                                    <>
                                        <Cell />
                                        <LabelList
                                            dataKey="currentDotationTitle"
                                            position="insideLeft"
                                            fill="white"
                                            dx={10}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Cell fill="#E3E3FD" />
                                        <LabelList
                                            dataKey="barTitle"
                                            position="insideLeft"
                                            fill="#161616"
                                            dx={10}
                                        />
                                    </>
                                )}
                            </Fragment>
                        );
                    })}
                    <LabelList
                        dataKey="label"
                        position="right"
                        fill="#161616"
                        dx={20}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComparer;
