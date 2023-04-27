import { LabelPercentage } from "components/ui";

interface SynthesePerHabitantProps {
    currentYearDotationPerHabitant: number;
    percentageEvolution: number | null;
}

function SynthesePerHabitant({
    currentYearDotationPerHabitant,
    percentageEvolution,
}: SynthesePerHabitantProps) {
    return (
        <div className="text-center mb-10">
            <span className="flex font-bold">Synthèse par habitant</span>
            <div className="bg-white rounded-lg py-4 px-16 my-6">
                <span className="text-sm">Dotation (DGF) / habitant</span>
                <div className="flex justify-center mt-2 items-center">
                    <span className="font-bold text-xl mr-2">
                        {Math.round(currentYearDotationPerHabitant)}€
                    </span>
                    {!!percentageEvolution && (
                        <LabelPercentage percentage={percentageEvolution} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default SynthesePerHabitant;
