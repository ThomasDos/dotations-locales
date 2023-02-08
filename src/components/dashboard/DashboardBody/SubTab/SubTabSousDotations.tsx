import { Accordion } from "@dataesr/react-dsfr";
import AccordionItemStyled from "components/ui/Accordion/AccordionItemStyled";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import type {
    Dotation,
    Dotations,
    SousDotations,
} from "models/entity/entity.interface";

import { useRef } from "react";
import { useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { selectCurrentYear } from "store/simulationEntity.slice";
import styled from "styled-components";
import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";

const StyledContainerNonEligible = styled.div`
    border-top: 1px solid var(--blue-france-850);
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

                const ifPluralS = countNonEligiblesCriteres > 1 ? "s" : "";
                const titleAccordion = `${countNonEligiblesCriteres} autre${ifPluralS} critere${ifPluralS} non éligible${ifPluralS}`;
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
                                    (
                                        criteresKey: string,
                                        indexEligible: number
                                    ) => (
                                        <ParameterCard
                                            key={criteresKey}
                                            critere={
                                                sousDotation.criteres[
                                                    criteresKey
                                                ]
                                            }
                                            isLast={
                                                Object.keys(criteresEligibles)
                                                    .length -
                                                    1 ===
                                                indexEligible
                                            }
                                        />
                                    )
                                )}

                            {!!countNonEligiblesCriteres && (
                                <Accordion className="my-10">
                                    <AccordionItemStyled
                                        title={titleAccordion}
                                        className="box-border"
                                        onClick={() => {
                                            matomoTrackEvent([
                                                "Fonction",
                                                "Afficher critères non éligibles",
                                            ]);
                                        }}
                                    >
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
                                    </AccordionItemStyled>
                                </Accordion>
                            )}
                        </>
                    </div>
                );
            })}
        </>
    );
};

export default SubTabSousDotations;
