import { Badge } from "@dataesr/react-dsfr";
import { LabelGreyCustomCrossIcon } from "components/ui";
import type { SousDotations } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import { selectCurrentYear } from "store/simulationEntity.slice";

interface SousDotationsProps {
    sousDotations: SousDotations;
}

const SousDotationsContainer = ({ sousDotations }: SousDotationsProps) => {
    const currentYear = useSelector(selectCurrentYear);

    return (
        <div className="flex justify-between sm:justify-start space mt-4 sm:space-x-4">
            {sousDotations.map(sousDot => {
                const dotationKey: string = Object.keys(sousDot)[0];
                const { annees, title } = sousDot[dotationKey];
                const currentYearTotal = annees.find(
                    annee => annee[currentYear]
                );

                return (
                    <div key={title} className="mx-1">
                        {currentYearTotal ? (
                            <Badge hasIcon type="success" text={title} />
                        ) : (
                            <LabelGreyCustomCrossIcon text={title} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default SousDotationsContainer;
