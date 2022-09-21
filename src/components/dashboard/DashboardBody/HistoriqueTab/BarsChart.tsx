import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import type { Dotation } from "models/commune/commune.interface";
import { useRouter } from "next/router";
import { Bar, BarChart, LabelList, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const StyledChartContainer = styled.div`
    border: 1px solid var(--blue-france-850);
    padding: 32px 48px 18px 32px;
`;

const StyledCardTitle = styled.span`
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
`;

interface BarsChartProps {
    dotation: Dotation;
}

export default function BarsChart({ dotation }: BarsChartProps) {
    const myData = [
        { label: "845.8K€", name: "2021", value: 845.8 },
        { label: "853.1K€", name: "2022", value: 853.1 },
        { label: "870.2K€", name: "2023", value: 870.2 },
    ];
    const { title } = dotation;

    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };
    return (
        <StyledChartContainer className="mt-10">
            <div className="flex flex-col mb-10">
                <div className="flex items-center justify-between">
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <DropdownMenuDownload />
                </div>
                <span>
                    {commune} ({codeInsee})
                </span>
            </div>
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
