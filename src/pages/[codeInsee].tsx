import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { fetchCommuneMocked } from "constants/fetchCommuneMocked";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import type { Commune } from "src/models/commune/commune.interface";
import { fetchCommuneSerializer } from "src/models/commune/commune.serializer";

const Dashboard = () => {
    const router = useRouter();
    const { commune, codeInsee } = router.query;
    const { data, error: fetchCommuneError } = useFetchCommune(
        codeInsee as string
    );
    console.log("data", data);

    const fetchCommuneData: Commune =
        fetchCommuneSerializer(fetchCommuneMocked);

    console.log("fetchCommuneError", fetchCommuneError);
    return (
        <>
            <SubHeader commune={commune as string} />
            <div className="flex pb-0.5">
                <DashboardBody dotations={fetchCommuneData.dotations} />
                <EntityParameters criteres={fetchCommuneData.criteres} />
            </div>
        </>
    );
};

export default Dashboard;
