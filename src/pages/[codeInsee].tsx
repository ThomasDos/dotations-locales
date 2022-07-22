import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const { commune, codeInsee } = router.query;
    console.log("codeInsee", codeInsee);
    const { data: fetchCommuneData, error: fetchCommuneError } =
        useFetchCommune(codeInsee as string);

    console.log("fetchCommuneData", fetchCommuneData);
    console.log("fetchCommuneError", fetchCommuneError);
    return (
        <>
            <SubHeader commune={commune as string} />
            <div className="flex pb-0.5">
                <DashboardBody />
                <EntityParameters />
            </div>
        </>
    );
};

export default Dashboard;
