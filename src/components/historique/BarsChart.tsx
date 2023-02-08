import useResize from "hooks/useResize";
import { HistoriqueDotations } from "models/historique/historique.interface";
import { useRouter } from "next/router";
import { Bar, BarChart, LabelList, ResponsiveContainer } from "recharts";
import styled from "styled-components";

import HistoriqueCardHeader from "./HistoriqueCardHeader";

const StyledChartContainer = styled.div`
    @media (min-width: 640px) {
        border: 1px solid var(--blue-france-850);
        padding: 32px 48px 18px 32px;
    }
`;

interface BarsChartProps {
    dotationTitle: string;
    historiqueData: HistoriqueDotations;
}

export default function BarsChart({
    dotationTitle,
    historiqueData,
}: BarsChartProps) {
    const { libelle, code } = useRouter().query as {
        libelle: string;
        code: string;
    };
    const { windowWidth } = useResize();
    const screenIsSmall = windowWidth < 640;

    return (
        <StyledChartContainer className="mt-10">
            <HistoriqueCardHeader
                anneesLength={historiqueData.length}
                title={dotationTitle}
                subtitle={`${libelle} (${code})`}
            />
            <ResponsiveContainer width={"100%"} height={320}>
                <BarChart
                    barCategoryGap={screenIsSmall ? "3%" : "15%"}
                    margin={
                        screenIsSmall
                            ? undefined
                            : {
                                  bottom: 30,
                                  left: 60,
                                  right: 60,
                                  top: 5,
                              }
                    }
                    data={historiqueData}
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
                    <Bar
                        dataKey="value"
                        fill="url(#colorUv)"
                        radius={[6, 6, 0, 0]}
                    >
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
