import type { HistoriqueDotations } from "models/historique/historique.serializer";
import { useRouter } from "next/router";
import { Bar, BarChart, LabelList, ResponsiveContainer } from "recharts";
import styled from "styled-components";

import HistoriqueCardHeader from "./HistoriqueCardHeader";

const StyledChartContainer = styled.div`
    border: 1px solid var(--blue-france-850);
    padding: 32px 48px 18px 32px;
`;

interface BarsChartProps {
    dotationTitle: string;
    historiqueData: HistoriqueDotations;
}

export default function BarsChart({
    dotationTitle,
    historiqueData,
}: BarsChartProps) {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };
    return (
        <StyledChartContainer className="mt-10">
            <HistoriqueCardHeader
                anneesLength={historiqueData.length}
                title={dotationTitle}
                subtitle={`${commune} (${codeInsee})`}
            />
            <ResponsiveContainer width={"100%"} height={320}>
                <BarChart
                    barCategoryGap={"15%"}
                    data={historiqueData}
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
                            dataKey="year"
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
