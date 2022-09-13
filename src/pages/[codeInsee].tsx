import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { SimulationBanner } from "components/simulation";
import { Spinner } from "components/ui";
import useDashboardInit from "hooks/useDashboardInit";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsSimulation } from "store/appSettings.slice";

const Dashboard = () => {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };

    const isSimulation = useSelector(selectIsSimulation);

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(codeInsee, !!codeInsee);

    useDashboardInit(fetchCommuneData);

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
                <SubHeader commune={commune} codeInsee={codeInsee} />
                <div className="w-auto my-40 flex justify-center">
                    <Spinner size="md" />
                </div>
            </>
        );
    }

    return (
        <>
            {isSimulation ? (
                <SimulationBanner />
            ) : (
                <SubHeader commune={commune} codeInsee={codeInsee} />
            )}
            <div className="flex pb-0.5">
                <DashboardBody />
                <EntityParameters />
            </div>
        </>
    );
};

export default Dashboard;
