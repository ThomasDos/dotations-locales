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
    return (
        <>
            <BarsChart
                historiqueData={historiqueData}
                dotationTitle={dotation.title}
            />
            <HistoriqueBoard
                historiqueData={historiqueData}
                dotationTitle={dotation.title}
            />
        </>
    );
}
