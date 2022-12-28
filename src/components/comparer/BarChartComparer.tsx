import useResize from "hooks/useResize";
import {
    Bar,
    BarChart,
    Cell,
    LabelList,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import styled from "styled-components";

interface DotationCurrentFormatedChartComparer {
    currentDotationTitle: string;
    value: number;
    label: string;
}

interface DotationFormatedChartComparer
    extends Omit<DotationCurrentFormatedChartComparer, "currentDotationTitle"> {
    barTitle: string;
}

interface BarChartComparerProps {
    dotations: (
        | DotationCurrentFormatedChartComparer
        | DotationFormatedChartComparer
    )[];
    title: string;
    subtitle: string;
}

const StyledBarChartComparerContainer = styled.div`
    @media (min-width: 640px) {
        border: 1px solid var(--blue-france-850);
        padding: 32px 48px 18px 32px;
    }
    margin-top: 40px;
`;

const BarChartComparer = ({
    dotations,
    title,
    subtitle,
}: BarChartComparerProps) => {
    const { windowWidth } = useResize();
    const screenIsSmall = windowWidth < 640;

    return (
        <StyledBarChartComparerContainer>
            <div>{title}</div>
            <div>{subtitle}</div>
            <ResponsiveContainer width={"100%"} height={50 * dotations.length}>
                <BarChart
                    layout="vertical"
                    margin={{
                        bottom: 0,
                        left: 0,
                        right: 50,
                        top: 0,
                    }}
                    data={dotations}
                >
                    <XAxis hide type="number" />
                    <YAxis hide type="category" />
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="1"
                            x2="1"
                            y2="1"
                        >
                            <stop offset="10%" stopColor="#6A6AF4" />
                            <stop offset="100%" stopColor="#3737EE" />
                        </linearGradient>
                    </defs>
                    <Bar
                        dataKey="value"
                        fill="url(#colorUv)"
                        radius={[6, 6, 6, 6]}
                        height={50}
                    >
                        {dotations.map((_, index) => {
                            if (!index) {
                                return (
                                    <>
                                        <Cell key={index} />
                                        ;
                                        <LabelList
                                            dataKey="currentDotationTitle"
                                            position="insideLeft"
                                            fill="white"
                                            dx={10}
                                        />
                                    </>
                                );
                            }
                            return (
                                <>
                                    <Cell key={index} fill="#E3E3FD" />
                                    <LabelList
                                        dataKey="barTitle"
                                        position="insideLeft"
                                        fill="#161616"
                                        dx={10}
                                    />
                                </>
                            );
                        })}
                        <LabelList
                            dataKey="label"
                            position="right"
                            fill="#161616"
                            dx={10}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </StyledBarChartComparerContainer>
    );
};

export default BarChartComparer;
