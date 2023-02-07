import { DotationsFormattedChartComparer } from "models/comparer/comparer.interface";
import {
    dotationDgfChartSerializer,
    dotationDgfPerHabitantChartSerializer,
    dotationsChartComparerSerializer,
    sousDotationsChartComparerSerializer,
} from "models/comparer/comparer.serializer";
import { Dotation } from "models/entity/entity.interface";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectEntities } from "store/entitiesComparer.slice";
import { selectInitialCurrentYear } from "store/initialEntity.slice";
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
    const entities = useSelector(selectEntities);
    const currentYear = useSelector(selectInitialCurrentYear);
    const dotationsChart: DotationsFormattedChartComparer = useMemo(() => {
        if (isDGF) {
            return dotationDgfChartSerializer(entities, currentYear);
        }

        if (isSousDotation) {
            return sousDotationsChartComparerSerializer(
                entities,
                currentYear,
                sousDotationKey as string
            ) as DotationsFormattedChartComparer;
        }
        return dotationsChartComparerSerializer(
            entities,
            currentYear,
            dotation
        ) as DotationsFormattedChartComparer;
    }, [entities]);

    const dotationsChartPerHabitant: DotationsFormattedChartComparer =
        useMemo(() => {
            if (isDGF) {
                return dotationDgfPerHabitantChartSerializer(
                    entities,
                    currentYear
                ) as DotationsFormattedChartComparer;
            }
            return [] as DotationsFormattedChartComparer;
        }, [entities]);

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
