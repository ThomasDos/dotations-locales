import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const { commune } = router.query;
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
