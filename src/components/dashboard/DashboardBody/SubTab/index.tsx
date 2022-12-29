import { Collapse } from "@mui/material";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { selectCurrentYear } from "store/simulationCommune.slice";
import styled from "styled-components";
import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
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

    const { annees } = dotation;

    const years = annees.map(annee => Object.keys(annee)[0]);
    const headersYears = years.map((year: string) => ({
        label: `Montant de l'année ${year}`,
        key: year,
    }));

    const { sousDotations, criteres, title } = dotation;
    const dotationFormattedToExportCsv = formatDotationWithCriteresToExportCsv(
        dotation,
        title
    );

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
                <>
                    <div className="pb-4 flex justify-end">
                        <DropdownMenuDownload
                            headers={[
                                { label: title, key: "title" },
                                ...headersYears,
                            ]}
                            dataCSV={dotationFormattedToExportCsv}
                        />
                    </div>
                    <>
                        <DotationCard
                            dotation={dotation}
                            borderTop
                            hasBackgroundColor
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
                                        matomoTrackEvent([
                                            "Fonction",
                                            "Afficher critères non éligibles",
                                        ]);
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
                </>
            )}
        </div>
    );
};

export default SubTab;
