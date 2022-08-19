import type {
    Dotation,
    Dotations,
    SousDotations,
} from "models/commune/commune.interface";

import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";

interface SubTabSousDotationsProps {
    dotation: Dotation;
    sousDotations: SousDotations;
    dotationMocked: Dotation;
}

const SubTabSousDotations = ({
    dotation,
    sousDotations,
    dotationMocked,
}: SubTabSousDotationsProps) => {
    return (
        <>
            <DotationCard dotation={dotation} borderTop />

            {sousDotations.map((sousDotationRecord: Dotations) => {
                const sousDotation: Dotation =
                    sousDotationRecord[Object.keys(sousDotationRecord)[0]];
                return (
                    <div className="pt-10" key={sousDotation.title}>
                        <DotationCard
                            dotation={sousDotation}
                            borderTop={true}
                            backgroundColor={true}
                        />
                        <ParameterCard parameter={dotationMocked} />
                    </div>
                );
            })}
        </>
    );
};

export default SubTabSousDotations;
