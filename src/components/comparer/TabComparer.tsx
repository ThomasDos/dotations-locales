import { Dotation } from "models/commune/commune.interface";
import { DotationsFormattedChartComparer } from "models/comparer/comparer.interface";
import {
    dotationDgfChartSerializer,
    dotationDgfPerHabitantChartSerializer,
    dotationsChartComparerSerializer,
    sousDotationsChartComparerSerializer,
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
    isSousDotation?: boolean;
    sousDotationKey?: string;
}

const TabComparer = ({
    title,
    subtitle,
    dotation,
    isDGF,
    isSousDotation,
    sousDotationKey,
}: BarChartComparerProps) => {
    const communes = useSelector(selectCommunes);
    const currentYear = useSelector(selectInitialCurrentYear);
    const dotationsChart: DotationsFormattedChartComparer = useMemo(() => {
        if (isDGF) {
            return dotationDgfChartSerializer(communes, currentYear);
        }

        if (isSousDotation) {
            return sousDotationsChartComparerSerializer(
                communes,
                currentYear,
                sousDotationKey as string
            ) as DotationsFormattedChartComparer;
        }
        return dotationsChartComparerSerializer(
            communes,
            currentYear,
            dotation
        ) as DotationsFormattedChartComparer;
    }, [communes]);

    const dotationsChartPerHabitant: DotationsFormattedChartComparer =
        useMemo(() => {
            if (isDGF) {
                return dotationDgfPerHabitantChartSerializer(
                    communes,
                    currentYear
                ) as DotationsFormattedChartComparer;
            }
            return [] as DotationsFormattedChartComparer;
        }, [communes]);

    return (
        <>
            <DotationComparerCard
                title={title}
                subtitle={subtitle}
                dotationsChart={dotationsChart}
                isSousDotation={isSousDotation}
                isDGF={isDGF}
            />
            {isDGF && (
                <DotationComparerCard
                    title={dotation.description}
                    subtitle={subtitle}
                    dotationsChart={dotationsChartPerHabitant}
                    isDGF={isDGF}
                    boardPerHabitant
                />
            )}
        </>
    );
};

export default TabComparer;
