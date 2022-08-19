import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { Spinner } from "components/ui";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hydrateInitialCommune } from "store/initialCommune/initialCommune.slice";
import { hydrateSimulationCommune } from "store/simulationCommune/simulationCommune.slice";
import getTotalDotations from "utils/getTotalDotations";

const Dashboard = () => {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };

    const [isSimulation, setIsSimulation] = useState<boolean>(false);

    const dispatch = useDispatch();

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(codeInsee, !!codeInsee);

    useEffect(() => {
        if (!fetchCommuneData) return;

        dispatch(hydrateInitialCommune(fetchCommuneData));
        dispatch(hydrateSimulationCommune(fetchCommuneData));
    }, [fetchCommuneData, dispatch]);

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
                <div className="w-auto my-40 flex justify-center">
                    <Spinner size="md" />
                </div>
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
                <div className="w-auto my-40 flex justify-center">
                    <Spinner size="md" />
                </div>
            ) : (
                <div className="flex pb-0.5">
                    <DashboardBody
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
                    />
                </div>
            )}
        </>
    );
};

export default Dashboard;
