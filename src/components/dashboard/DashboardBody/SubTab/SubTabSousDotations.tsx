import { Collapse } from "@mui/material";
import _ from "lodash";
import type {
    Dotation,
    Dotations,
    SousDotations,
} from "models/commune/commune.interface";
import { useState } from "react";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleCriteresNonEligibles from "../TitleCriteresNonEligibles";
import ParameterCard from "./ParameterCard";

interface SubTabSousDotationsProps {
    dotation: Dotation;
    sousDotations: SousDotations;
}

const SubTabSousDotations = ({
    dotation,
    sousDotations,
}: SubTabSousDotationsProps) => {
    const [showNonEligible, setShowNonEligible] = useState(false);
    return (
        <>
            <DotationCard dotation={dotation} borderTop />

            {sousDotations.map((sousDotationRecord: Dotations) => {
                const sousDotation: Dotation =
                    sousDotationRecord[Object.keys(sousDotationRecord)[0]];

                const { criteresEligibles, criteresNonEligibles } =
                    sortCriteresEligiblesOrNonEligibles(sousDotation.criteres);
                const countNonEligiblesCriteres =
                    !_.isEmpty(criteresNonEligibles) &&
                    Object.keys(criteresNonEligibles).length;
                return (
                    <div className="pt-10" key={sousDotation.title}>
                        <>
                            <DotationCard
                                dotation={sousDotation}
                                borderTop={true}
                                backgroundColor={true}
                            />

                            {!_.isEmpty(criteresEligibles) &&
                                Object.keys(criteresEligibles).map(
                                    (criteresKey: string) => (
                                        <ParameterCard
                                            key={criteresKey}
                                            critere={
                                                sousDotation.criteres[
                                                    criteresKey
                                                ]
                                            }
                                        />
                                    )
                                )}

                            {countNonEligiblesCriteres ? (
                                <>
                                    <TitleCriteresNonEligibles
                                        showNonEligible={showNonEligible}
                                        setShowNonEligible={setShowNonEligible}
                                        countNonEligiblesCriteres={
                                            countNonEligiblesCriteres
                                        }
                                    />

                                    <Collapse in={showNonEligible}>
                                        {Object.keys(criteresNonEligibles).map(
                                            (critereNonEligibleKey: string) => {
                                                return (
                                                    <ParameterCard
                                                        key={
                                                            critereNonEligibleKey
                                                        }
                                                        critere={
                                                            sousDotation
                                                                .criteres[
                                                                critereNonEligibleKey
                                                            ]
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </Collapse>
                                </>
                            ) : null}
                        </>
                    </div>
                );
            })}
        </>
    );
};

export default SubTabSousDotations;
