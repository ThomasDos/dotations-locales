import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import CriteresGenerauxSimulation from "components/simulation/CriteresGenerauxSimulation";
import SimulationBanner from "components/simulation/SimulationBanner";
import { Spinner } from "components/ui";
import AlertDefaultModal from "components/ui/AlertModal";
import communesList from "constants/communesList";
import useDashboardInit from "hooks/useDashboardInit";
import useFetchCommune from "hooks/useFetchCommune";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dehydrate, QueryClient } from "react-query";
import { useSelector } from "react-redux";
import fetchCommune from "services/fetchCommune";
import { selectIsSimulation } from "store/appSettings.slice";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = communesList.map(({ codeInsee }) => ({
        params: { codeInsee },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const queryClient = new QueryClient();

    const { codeInsee } = params as { codeInsee: string };

    await queryClient.prefetchQuery(["fetchCommune", codeInsee], () =>
        fetchCommune(codeInsee)
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

const Dashboard = () => {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };

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
    } = useFetchCommune(codeInsee, !!codeInsee);

    useDashboardInit(fetchCommuneData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSimulation]);

    useEffect(() => {
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

    if (
        !fetchCommuneData ||
        (fetchCommuneIsLoading as boolean) ||
        fetchCommuneError
    ) {
        return (
            <>
                <Head>
                    <title>Le tableau de bord de votre dotation</title>
                </Head>
                <SubHeader commune={commune} codeInsee={codeInsee} />
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
                <SubHeader commune={commune} codeInsee={codeInsee} />
            )}
            {isCriteresGenerauxSimulation && isSimulation ? (
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
