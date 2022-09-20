import { Bar, BarChart, LabelList, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const StyledChartContainer = styled.div`
    border: 1px solid var(--blue-france-850);
    padding: 32px 48px 18px 32px;
`;

export default function BarsChart() {
    const myData = [
        { label: "243K€", name: "2021", value: 243 },
        { label: "213K€", name: "2022", value: 213 },
        { label: "253K€", name: "2023", value: 253 },
    ];
    return (
        <StyledChartContainer className="mt-10">
            <ResponsiveContainer width={"100%"} height={320}>
                <BarChart
                    barCategoryGap={"15%"}
                    data={myData}
                    margin={{ bottom: 30, left: 120, right: 120, top: 5 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="1"
                            y1="1"
                            x2="1"
                            y2="0"
                        >
                            <stop offset="10%" stopColor="#6A6AF4" />
                            <stop offset="100%" stopColor="#3737EE" />
                        </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill="url(#colorUv)">
                        <LabelList
                            dataKey="label"
                            position="insideTop"
                            fill="#FFF"
                            dy={10}
                        />
                        <LabelList
                            dataKey="name"
                            position="bottom"
                            fill="#161616"
                            dy={10}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </StyledChartContainer>
    );
}
