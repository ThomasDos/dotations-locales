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
import { hydrateInitialCommune } from "store/initialCommune.slice";
import { hydrateSimulationCommune } from "store/simulationCommune.slice";

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
                    <DashboardBody isSimulation={isSimulation} />
                    <EntityParameters
                        isSimulation={isSimulation}
                        setIsSimulation={setIsSimulation}
                    />
                </div>
            )}
        </>
    );
};

export default Dashboard;
