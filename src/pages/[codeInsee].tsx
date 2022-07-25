import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { Spinner } from "components/ui";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const { commune, codeInsee } = router.query;
    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(codeInsee as string);

    if ((!fetchCommuneData || fetchCommuneError) && !fetchCommuneIsLoading) {
        return (
            <>
                <SubHeader commune={commune as string} />

                <div className="flex pb-0.5">
                    <div>Merci de reessayer plus tard</div>
                </div>
            </>
        );
    }
    return (
        <>
            <SubHeader commune={commune as string} />
            {fetchCommuneIsLoading ? (
                <Spinner />
            ) : (
                <div className="flex pb-0.5">
                    <DashboardBody dotations={fetchCommuneData.dotations} />
                    <EntityParameters criteres={fetchCommuneData.criteres} />
                </div>
            )}
        </>
    );
};

export default Dashboard;
