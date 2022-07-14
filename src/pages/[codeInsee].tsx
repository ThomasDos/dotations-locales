import SubHeader from "components/SubHeader";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const { commune } = router.query;
    return (
        <div>
            <SubHeader commune={commune as string} />
        </div>
    );
};

export default Dashboard;
