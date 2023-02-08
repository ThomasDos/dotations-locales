import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import CriteresGenerauxSimulation from "components/simulation/CriteresGenerauxSimulation";
import SimulationBanner from "components/simulation/SimulationBanner";
import { Spinner } from "components/ui";
import AlertDefaultModal from "components/ui/AlertModal";
import useDashboardInit from "hooks/useDashboardInit";
import useFetchCommune from "hooks/useFetchCommune";
import useFetchEPCI from "hooks/useFetchEPCI";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    selectIsCommune,
    selectIsEPCI,
    selectIsSimulation,
} from "store/appSettings.slice";
import { toastError } from "utils/customToasts";

const Dashboard = () => {
    const router = useRouter();
    const { libelle, code } = router.query as {
        libelle: string;
        code: string;
    };

    const isEPCI = useSelector(selectIsEPCI);
    const isCommune = useSelector(selectIsCommune);
    const isSimulation = useSelector(selectIsSimulation);
    const [isCriteresGenerauxSimulation, setIsCriteresGenerauxSimulation] =
        useState(true);
    const [displayMobileCriteresGeneraux, setDisplayMobileCriteresGeneraux] =
        useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [hasConfirmedAlert, setHasConfirmedAlert] = useState(false);

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(code, !!code && isCommune);

    const {
        data: fetchEPCIData,
        error: fetchEPCIError,
        isLoading: fetchEPCIIsLoading,
    } = useFetchEPCI(code, !!code && isEPCI);

    useDashboardInit(fetchCommuneData || fetchEPCIData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSimulation]);

    useEffect(() => {
        if (!isEPCI && !isCommune) {
            router.push("/");
        }
        const tallyHasOpen = window.sessionStorage.getItem("tallyHasOpen");
        if (tallyHasOpen) return;
        //@ts-ignore
        window.Tally?.openPopup(process.env.NEXT_PUBLIC_API_TALLY, {
            autoClose: 3000,
            doNotShowAfterSubmit: true,
            emoji: {
                animation: "wave",
                text: "👋",
            },
            hideTitle: true,
        });
        window.sessionStorage.setItem("tallyHasOpen", "true");
    }, []);

    if (fetchCommuneError && fetchEPCIError) {
        toastError("Une erreur est survenue avec cette commune");
        router.push("/");
    }

    if (
        (!fetchCommuneData && !fetchEPCIData) ||
        fetchCommuneIsLoading ||
        fetchEPCIIsLoading
    ) {
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
