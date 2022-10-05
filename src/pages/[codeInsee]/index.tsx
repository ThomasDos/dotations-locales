import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import DashboardFooter from "components/dashboard/DashboardFooter";
import CriteresGenerauxSimulation from "components/simulation/CriteresGenerauxSimulation";
import SimulationBanner from "components/simulation/SimulationBanner";
import { Spinner } from "components/ui";
import useDashboardInit from "hooks/useDashboardInit";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsSimulation } from "store/appSettings.slice";

const Dashboard = () => {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };

    const isSimulation = useSelector(selectIsSimulation);
    const [isCriteresGenerauxSimulation, setIsCriteresGenerauxSimulation] =
        useState(false);

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
                <SimulationBanner
                    setIsCriteresGenerauxSimulation={
                        setIsCriteresGenerauxSimulation
                    }
                />
            ) : (
                <SubHeader commune={commune} codeInsee={codeInsee} />
            )}
            {isCriteresGenerauxSimulation ? (
                <CriteresGenerauxSimulation
                    setIsCriteresGenerauxSimulation={
                        setIsCriteresGenerauxSimulation
                    }
                />
            ) : (
                <>
                    <div className="flex pb-0.5">
                        <DashboardBody />
                        <EntityParameters
                            setIsCriteresGenerauxSimulation={
                                setIsCriteresGenerauxSimulation
                            }
                        />
                    </div>
                    <DashboardFooter />
                </>
            )}
        </>
    );
};

export default Dashboard;
