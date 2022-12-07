import { Collapse } from "@mui/material";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import type {
    Dotation,
    Dotations,
    SousDotations,
} from "models/commune/commune.interface";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { selectCurrentYear } from "store/simulationCommune.slice";
import styled from "styled-components";
import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleCriteresNonEligibles from "../TitleCriteresNonEligibles";
import ParameterCard from "./ParameterCard";

const StyledContainerNonEligible = styled.div`
    border-bottom: 1px solid var(--blue-france-850);
`;

interface SubTabSousDotationsProps {
    dotation: Dotation;
    sousDotations: SousDotations;
}

const SubTabSousDotations = ({
    dotation,
    sousDotations,
}: SubTabSousDotationsProps) => {
    const currentYear = useSelector(selectCurrentYear);
    const [showNonEligible, setShowNonEligible] = useState({
        dsrFractionBourgCentre: false,
        dsrFractionCible: false,
        dsrFractionPerequation: false,
    });
    const dotationTotalExport = useRef<{}[]>([]);

    const { annees } = dotation;

    const years = annees.map(annee => Object.keys(annee)[0]);

    const headersYears = years.map((year: string) => ({
        label: `Montant de l'année ${year}`,
        key: year,
    }));

    return (
        <>
            <div className="pb-4 flex justify-end">
                <DropdownMenuDownload
                    headers={[
                        { label: "Dotations", key: "title" },
                        ...headersYears,
                    ]}
                    dataCSV={dotationTotalExport.current}
                />
            </div>
            <DotationCard dotation={dotation} borderTop />

            {sousDotations.map((sousDotationRecord: Dotations) => {
                const keyName = Object.keys(sousDotationRecord)[0] as
                    | "dsrFractionBourgCentre"
                    | "dsrFractionCible"
                    | "dsrFractionPerequation";
                const sousDotation: Dotation = sousDotationRecord[keyName];

                const sousDotationFormattedToExportCsv =
                    formatDotationWithCriteresToExportCsv(
                        sousDotation,
                        sousDotation.title
                    );

                dotationTotalExport.current = [
                    ...dotationTotalExport.current,
                    ...sousDotationFormattedToExportCsv,
                ];
                const { criteresEligibles, criteresNonEligibles } =
                    sortCriteresEligiblesOrNonEligibles(
                        sousDotation.criteres,
                        currentYear
                    );
                const countNonEligiblesCriteres =
                    !_.isEmpty(criteresNonEligibles) &&
                    Object.keys(criteresNonEligibles).length;
                return (
                    <div className="pt-10" key={sousDotation.title}>
                        <>
                            <DotationCard
                                dotation={sousDotation}
                                borderTop
                                hasBackgroundColor
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
                                            matomoTrackEvent([
                                                "fonction",
                                                "afficher non éligibles",
                                                "criteres",
                                            ]);
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
                                        <StyledContainerNonEligible>
                                            {Object.keys(
                                                criteresNonEligibles
                                            ).map(
                                                (
                                                    critereNonEligibleKey: string
                                                ) => {
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
                                        </StyledContainerNonEligible>
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
