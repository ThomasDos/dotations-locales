import {
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
} from "components/ui";
import type { SousDotations } from "models/commune/commune.interface";
import { useSelector } from "react-redux";
import { selectCurrentYear } from "store/simulationCommune.slice";

interface SousDotationsProps {
    sousDotations: SousDotations;
}

const SousDotationsContainer = ({ sousDotations }: SousDotationsProps) => {
    const currentYear = useSelector(selectCurrentYear);

    return (
        <div className="flex space mt-4 space-x-4">
            {sousDotations.map(sousDot => {
                const dotationKey: string = Object.keys(sousDot)[0];
                const { annees, title } = sousDot[dotationKey];
                const currentYearTotal = annees.find(
                    annee => annee[currentYear]
                );

                return (
                    <div key={title} className="mx-1">
                        {currentYearTotal ? (
                            <LabelGreenCustomCrossIcon text={title} />
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
