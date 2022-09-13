import { Collapse } from "@mui/material";
import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentYear } from "store/simulationCommune.slice";
import styled from "styled-components";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleCriteresNonEligibles from "../TitleCriteresNonEligibles";
import ParameterCard from "./ParameterCard";
import SubTabSousDotations from "./SubTabSousDotations";

const StyledContainerNonEligible = styled.div`
    border-bottom: 1px solid var(--blue-france-850);
`;

interface SubTabProps {
    dotation: Dotation;
}

const SubTab = ({ dotation }: SubTabProps) => {
    const [showNonEligible, setShowNonEligible] = useState(false);
    const currentYear = useSelector(selectCurrentYear);

    const { sousDotations, criteres } = dotation;

    const { criteresEligibles, criteresNonEligibles } =
        sortCriteresEligiblesOrNonEligibles(criteres, currentYear);
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
                                    <StyledContainerNonEligible>
                                        {Object.keys(criteresNonEligibles).map(
                                            (critereNonEligibleKey: string) => {
                                                return (
                                                    <ParameterCard
                                                        key={
                                                            critereNonEligibleKey
                                                        }
                                                        critere={
                                                            criteres[
                                                                critereNonEligibleKey
                                                            ]
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </StyledContainerNonEligible>
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
