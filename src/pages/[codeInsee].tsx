import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { Spinner } from "components/ui";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import getTotalDotations from "utils/getTotalDotations";

const Dashboard = () => {
    const router = useRouter();
    const { commune, codeInsee } = router.query as {
        commune: string;
        codeInsee: string;
    };
    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(codeInsee);

    if (
        !fetchCommuneData ||
        (fetchCommuneIsLoading as boolean) ||
        fetchCommuneError
    ) {
        return (
            <>
                <SubHeader commune={commune} />

                <div className="flex pb-0.5">
                    <div>Merci de reessayer plus tard</div>
                </div>
            </>
        );
    }

    const { dotations, criteres } = fetchCommuneData;

    const currentYear = new Date().getFullYear();
    const lastYear = new Date().getFullYear() - 1;
    const currentYearTotal = getTotalDotations(dotations, String(currentYear));
    const lastYearTotal = getTotalDotations(dotations, String(lastYear));

    return (
        <>
            <SubHeader commune={commune} />
            {(fetchCommuneIsLoading as boolean) ? (
                <Spinner />
            ) : (
                <div className="flex pb-0.5">
                    <DashboardBody
                        dotations={dotations}
                        currentYearTotal={currentYearTotal}
                        lastYearTotal={lastYearTotal}
                    />
                    <EntityParameters
                        criteres={criteres}
                        currentYearTotal={currentYearTotal}
                        currentYear={`${currentYear}`}
                        lastYear={`${lastYear}`}
                        lastYearTotal={lastYearTotal}
                    />
                </div>
            )}
        </>
    );
};

export default Dashboard;
