import type { Dotation } from "models/commune/commune.interface";

import BarsChart from "./BarsChart";

interface HistoriqueTabProps {
    dotation: Dotation;
}

export default function HistoriqueTab({ dotation }: HistoriqueTabProps) {
    return (
        <>
            <BarsChart dotation={dotation} />
        </>
    );
}
