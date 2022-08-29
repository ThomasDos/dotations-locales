import { Collapse } from "@mui/material";
import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import { useState } from "react";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleCriteresNonEligibles from "../TitleCriteresNonEligibles";
import ParameterCard from "./ParameterCard";
import SubTabSousDotations from "./SubTabSousDotations";

interface SubTabProps {
    dotation: Dotation;
}

const SubTab = ({ dotation }: SubTabProps) => {
    const [showNonEligible, setShowNonEligible] = useState(false);

    const { sousDotations, criteres } = dotation;

    const { criteresEligibles, criteresNonEligibles } =
        sortCriteresEligiblesOrNonEligibles(criteres);
    const countNonEligiblesCriteres =
        !_.isEmpty(criteresNonEligibles) &&
        Object.keys(criteresNonEligibles).length;

    return (
        <div className="pt-10">
            {sousDotations ? (
                <SubTabSousDotations
                    dotation={dotation}
                    sousDotations={sousDotations}
                />
            ) : (
                <div className="pt-10">
                    <>
                        <DotationCard
                            dotation={dotation}
                            borderTop={true}
                            backgroundColor={true}
                        />
                        {!_.isEmpty(criteresEligibles) &&
                            Object.keys(criteresEligibles).map(
                                (criteresKey: string) => (
                                    <ParameterCard
                                        key={criteresKey}
                                        critere={criteres[criteresKey]}
                                    />
                                )
                            )}

                        {countNonEligiblesCriteres ? (
                            <>
                                <TitleCriteresNonEligibles
                                    showNonEligible={showNonEligible}
                                    toggleShowNonEligible={() => {
                                        setShowNonEligible(!showNonEligible);
                                    }}
                                    countNonEligiblesCriteres={
                                        countNonEligiblesCriteres
                                    }
                                />

                                <Collapse in={showNonEligible}>
                                    {Object.keys(criteresNonEligibles).map(
                                        (critereNonEligibleKey: string) => {
                                            return (
                                                <ParameterCard
                                                    key={critereNonEligibleKey}
                                                    critere={
                                                        criteres[
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
            )}
        </div>
    );
};

export default SubTab;
