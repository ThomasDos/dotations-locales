import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import CriteresGenerauxSimulation from "components/simulation/CriteresGenerauxSimulation";
import SimulationBanner from "components/simulation/SimulationBanner";
import { Spinner } from "components/ui";
import AlertDefaultModal from "components/ui/AlertModal";
import useDataEntityInit from "hooks/useDataEntityInit";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsCommune,
    selectIsSimulation,
    selectSimulationIsEnabled,
    updateIsSimulationFalse,
} from "store/appSettings.slice";

const Dashboard = () => {
    const router = useRouter();
    const { libelle, code } = router.query as {
        libelle: string;
        code: string;
    };
    const dispatch = useDispatch();
    const isCommune = useSelector(selectIsCommune);
    const isSimulation = useSelector(selectIsSimulation);
    const simulationIsEnabled = useSelector(selectSimulationIsEnabled);

    const [isCriteresGenerauxSimulation, setIsCriteresGenerauxSimulation] =
        useState(true);
    const [displayMobileCriteresGeneraux, setDisplayMobileCriteresGeneraux] =
        useState(false);
    const [showAlertModal, setShowAlertModal] = useState(true);
    const [hasConfirmedAlert, setHasConfirmedAlert] = useState(false);

    const { showSpinner } = useDataEntityInit(code);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSimulation]);

    useEffect(() => {
        if (!simulationIsEnabled) {
            dispatch(updateIsSimulationFalse());
        }
    }, []);

    if (showSpinner) {
        return (
            <>
                <Head>
                    <title>Le tableau de bord de votre dotation</title>
                </Head>
                <SubHeader libelle={libelle} code={code} />
                <div className="w-auto my-40 flex justify-center">
                    <Spinner size="md" />
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Le tableau de bord de votre dotation</title>
            </Head>
            {isSimulation ? (
                <SimulationBanner
                    setIsCriteresGenerauxSimulation={
                        setIsCriteresGenerauxSimulation
                    }
                />
            ) : (
                <SubHeader libelle={libelle} code={code} />
            )}
            {isCriteresGenerauxSimulation && isSimulation && isCommune ? (
                <CriteresGenerauxSimulation
                    setIsCriteresGenerauxSimulation={
                        setIsCriteresGenerauxSimulation
                    }
                    setDisplayMobileCriteresGeneraux={
                        setDisplayMobileCriteresGeneraux
                    }
                    setShowAlertModal={setShowAlertModal}
                />
            ) : (
                <div className="flex pb-0.5">
                    <DashboardBody
                        setDisplayMobileCriteresGeneraux={
                            setDisplayMobileCriteresGeneraux
                        }
                        displayMobileCriteresGeneraux={
                            displayMobileCriteresGeneraux
                        }
                    />
                    <EntityParameters
                        setIsCriteresGenerauxSimulation={
                            setIsCriteresGenerauxSimulation
                        }
                        setDisplayMobileCriteresGeneraux={
                            setDisplayMobileCriteresGeneraux
                        }
                        displayMobileCriteresGeneraux={
                            displayMobileCriteresGeneraux
                        }
                    />
                </div>
            )}
            <AlertDefaultModal
                setShowAlertModal={setShowAlertModal}
                showAlertModal={!hasConfirmedAlert && showAlertModal}
                setHasConfirmedAlert={setHasConfirmedAlert}
            />
        </>
    );
};

export default Dashboard;
