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
    const [showNonEligible, setShowNonEligible] = useState({
        dsrFractionBourgCentre: false,
        dsrFractionCible: false,
        dsrFractionPerequation: false,
    });
    return (
        <>
            <DotationCard dotation={dotation} borderTop />

            {sousDotations.map((sousDotationRecord: Dotations) => {
                const keyName = Object.keys(sousDotationRecord)[0] as
                    | "dsrFractionBourgCentre"
                    | "dsrFractionCible"
                    | "dsrFractionPerequation";
                const sousDotation: Dotation = sousDotationRecord[keyName];

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
                                        showNonEligible={
                                            showNonEligible[keyName]
                                        }
                                        toggleShowNonEligible={() => {
                                            setShowNonEligible({
                                                ...showNonEligible,
                                                [keyName]:
                                                    !showNonEligible[keyName],
                                            });
                                        }}
                                        countNonEligiblesCriteres={
                                            countNonEligiblesCriteres
                                        }
                                    />

                                    <Collapse in={showNonEligible[keyName]}>
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
