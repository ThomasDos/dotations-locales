import { Accordion } from "@dataesr/react-dsfr";
import AccordionItemStyled from "components/ui/Accordion/AccordionItemStyled";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";
import { useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { selectCurrentYear } from "store/simulationCommune.slice";
import styled from "styled-components";
import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";
import SubTabSousDotations from "./SubTabSousDotations";

const StyledContainerNonEligible = styled.div`
    border-top: 1px solid var(--blue-france-850);
    border-bottom: 1px solid var(--blue-france-850);
`;

interface SubTabProps {
    dotation: Dotation;
}

const SubTab = ({ dotation }: SubTabProps) => {
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

    const ifPluralS = countNonEligiblesCriteres > 1 ? "s" : "";
    const titleAccordion = `${countNonEligiblesCriteres} autre${ifPluralS} critere${ifPluralS} non éligible${ifPluralS}`;

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
                                (
                                    criteresKey: string,
                                    indexEligible: number
                                ) => (
                                    <ParameterCard
                                        key={criteresKey}
                                        critere={criteres[criteresKey]}
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
                                </AccordionItemStyled>
                            </Accordion>
                        )}
                    </>
                </>
            )}
        </div>
    );
};

export default SubTab;
