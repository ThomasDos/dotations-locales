import {
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
} from "components/ui";
import type { SousDotations } from "models/commune/commune.interface";

interface SousDotationsProps {
    sousDotations: SousDotations;
}

const SousDotationsContainer = ({ sousDotations }: SousDotationsProps) => {
    const currentYear = String(new Date().getFullYear());
    return (
        <div className="flex justify-around mt-4">
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
