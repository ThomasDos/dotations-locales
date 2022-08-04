import { dotationsMocked } from "__fixtures__/dotationsMocked";
import type { Dotation } from "models/commune/commune.interface";

import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";
import SubTabSousDotations from "./SubTabSousDotations";

interface SubTabProps {
    dotation: Dotation;
}

const SubTab = ({ dotation }: SubTabProps) => {
    const { sousDotations } = dotation;
    const { dotationForfaitaire: dotationMocked } = dotationsMocked;

    return (
        <div className="pt-10">
            {sousDotations ? (
                <SubTabSousDotations
                    dotation={dotation}
                    dotationMocked={dotationMocked}
                    sousDotations={sousDotations}
                />
            ) : (
                <div className="pt-10">
                    <DotationCard
                        dotation={dotation}
                        borderTop={true}
                        backgroundColor={true}
                    />
                    <ParameterCard parameter={dotationMocked} />
                </div>
            )}
        </div>
    );
};

export default SubTab;
