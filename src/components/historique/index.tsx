import ImageFixed from "components/ui/ImageFixed";
import type { Dotation } from "models/commune/commune.interface";
import { historiqueSerializer } from "models/historique/historique.serializer";
import { useMemo } from "react";

import BarsChart from "./BarsChart";
import HistoriqueBoard from "./HistoriqueBoard";

interface HistoriqueTabProps {
    dotation: Dotation;
}

export default function HistoriqueTab({ dotation }: HistoriqueTabProps) {
    const historiqueData = useMemo(
        () => historiqueSerializer(dotation),
        [dotation]
    );

    const historiqueDataIsEligible = !!historiqueData.reduce(
        (acc, annee) => annee.value + acc,
        0
    );

    if (!historiqueDataIsEligible) {
        return (
            <div className="px-4 py-10 text-center">
                <div className="pb-10">
                    Cette dotation n&apos;est pas éligible
                </div>

                <ImageFixed
                    alt="un coeur avec une moustache et les couleurs de la France"
                    width={128}
                    height={128}
                    src="/images/france-moustache.png"
                    className="animate-bounce flex justify-center"
                />
            </div>
        );
    }

    return (
        <>
            <BarsChart
                historiqueData={historiqueData}
                dotationTitle={dotation.title}
            />
            <HistoriqueBoard
                historiqueData={historiqueData}
                dotationTitle={dotation.title}
                dotationLabel={dotation.label}
            />
        </>
    );
}
