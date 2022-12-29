import { Dotation } from "models/commune/commune.interface";
import { DotationsFormatedChartComparer } from "models/comparer/comparer.interface";
import {
    dotationDgfChartSerializer,
    dotationDgfPerHabitantChartSerializer,
    dotationsChartComparerSerializer,
} from "models/comparer/comparer.serializer";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCommunes } from "store/communesComparer.slice";
import { selectInitialCurrentYear } from "store/initialCommune.slice";
import DotationComparerCard from "./DotationComparerCard";

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
            return dotationDgfChartSerializer(
                communes,
                currentYear
            ) as DotationsFormatedChartComparer;
        }
        return dotationsChartComparerSerializer(
            communes,
            currentYear,
            dotation
        ) as DotationsFormatedChartComparer;
    }, [communes]);

    const dotationsChartPerHabitant: DotationsFormatedChartComparer =
        useMemo(() => {
            if (isDGF) {
                return dotationDgfPerHabitantChartSerializer(
                    communes,
                    currentYear
                ) as DotationsFormatedChartComparer;
            }
            return [] as DotationsFormatedChartComparer;
        }, [communes]);

    return (
        <>
            <DotationComparerCard
                title={title}
                subtitle={subtitle}
                dotationsChart={dotationsChart}
            />
            {isDGF && (
                <DotationComparerCard
                    title={dotation.description}
                    subtitle={subtitle}
                    dotationsChart={dotationsChartPerHabitant}
                />
            )}
        </>
    );
};

export default TabComparer;
