import {
    DashboardBody,
    EntityParameters,
    SubHeader,
} from "components/dashboard";
import { Spinner } from "components/ui";
import useFetchCommune from "hooks/useFetchCommune";
import { useRouter } from "next/router";
import getTotalDotations from "utils/getTotalDotations";

const Simulation = () => {
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };

    const {
        data: fetchCommuneData,
        error: fetchCommuneError,
        isLoading: fetchCommuneIsLoading,
    } = useFetchCommune(codeInsee, !!codeInsee);

    if (
        !fetchCommuneData ||
        (fetchCommuneIsLoading as boolean) ||
        fetchCommuneError
    ) {
        return (
            <>
                <SubHeader
                    commune={commune}
                    codeInsee={codeInsee}
                    isSimulation
                />

                <Spinner />
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
            <SubHeader commune={commune} codeInsee={codeInsee} isSimulation />
            {(fetchCommuneIsLoading as boolean) ? (
                <Spinner />
            ) : (
                <div className="flex pb-0.5">
                    <DashboardBody
                        dotations={dotations}
                        currentYear={currentYear}
                        currentYearTotal={currentYearTotal}
                        lastYear={lastYear}
                        lastYearTotal={lastYearTotal}
                        isSimulation
                    />
                    <EntityParameters
                        criteres={criteres}
                        currentYearTotal={currentYearTotal}
                        currentYear={`${currentYear}`}
                        lastYear={`${lastYear}`}
                        lastYearTotal={lastYearTotal}
                        isSimulation
                    />
                </div>
            )}
        </>
    );
};

export default Simulation;
