import _ from "lodash";
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
}

const SubTabSousDotations = ({
    dotation,
    sousDotations,
}: SubTabSousDotationsProps) => {
    const { criteres } = dotation;

    return (
        <>
            <DotationCard dotation={dotation} borderTop />

            {sousDotations.map((sousDotationRecord: Dotations) => {
                const sousDotation: Dotation =
                    sousDotationRecord[Object.keys(sousDotationRecord)[0]];
                return (
                    <div className="pt-10" key={sousDotation.title}>
                        <>
                            <DotationCard
                                dotation={sousDotation}
                                borderTop={true}
                                backgroundColor={true}
                            />
                            {!_.isEmpty(criteres) &&
                                Object.keys(criteres).map(
                                    (criteresKey: string) => (
                                        <ParameterCard
                                            key={criteresKey}
                                            critere={criteres[criteresKey]}
                                        />
                                    )
                                )}
                        </>
                    </div>
                );
            })}
        </>
    );
};

export default SubTabSousDotations;
