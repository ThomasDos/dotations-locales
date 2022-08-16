import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { Spinner } from "components/ui";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getTotalDotations from "utils/getTotalDotations";

const Dashboard = () => {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };

    const [isSimulation, setIsSimulation] = useState<boolean>(false);

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(codeInsee, !!codeInsee);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSimulation]);

    if (
        !fetchCommuneData ||
        (fetchCommuneIsLoading as boolean) ||
        fetchCommuneError
    ) {
        return (
            <>
                <SubHeader
                    commune={commune}
                    codeInsee={codeInsee}
                    isSimulation={isSimulation}
                    setIsSimulation={setIsSimulation}
                />

                <Spinner />
            </>
        );
    }

    const { dotations } = fetchCommuneData;

    const currentYear = new Date().getFullYear();
    const lastYear = new Date().getFullYear() - 1;
    const currentYearTotal = getTotalDotations(dotations, String(currentYear));
    const lastYearTotal = getTotalDotations(dotations, String(lastYear));

    return (
        <>
            <SubHeader
                commune={commune}
                codeInsee={codeInsee}
                isSimulation={isSimulation}
                setIsSimulation={setIsSimulation}
            />
            {(fetchCommuneIsLoading as boolean) ? (
                <Spinner />
            ) : (
                <div className="flex pb-0.5">
                    <DashboardBody
                        dotations={dotations}
                        currentYear={currentYear}
                        currentYearTotal={currentYearTotal}
                        lastYear={lastYear}
                        lastYearTotal={lastYearTotal}
                        isSimulation={isSimulation}
                    />
                    <EntityParameters
                        currentYearTotal={currentYearTotal}
                        currentYear={`${currentYear}`}
                        lastYear={`${lastYear}`}
                        lastYearTotal={lastYearTotal}
                        isSimulation={isSimulation}
                        setIsSimulation={setIsSimulation}
                        fetchCommuneData={fetchCommuneData}
                    />
                </div>
            )}
        </>
    );
};

export default Dashboard;
