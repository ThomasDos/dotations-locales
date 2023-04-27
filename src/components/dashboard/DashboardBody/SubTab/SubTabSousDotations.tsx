import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import type {
    Dotation,
    Dotations,
    SousDotations,
} from "models/entity/entity.interface";

import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentYearCriteres } from "store/simulationEntity.slice";
import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import { selectIsDotationsAnneesDifferentThanCriteresAnnees } from "store/initialEntity.slice";
import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";
import ParameterCardTitle from "./ParameterCardTitle";

interface SubTabSousDotationsProps {
    dotation: Dotation;
    sousDotations: SousDotations;
}

const SubTabSousDotations = ({
    dotation,
    sousDotations,
}: SubTabSousDotationsProps) => {
    const currentYearCriteres = useSelector(selectCurrentYearCriteres);
    const isDotationsAnneesDifferentThanCriteresAnnees = useSelector(
        selectIsDotationsAnneesDifferentThanCriteresAnnees
    );

    const dotationTotalExport = useRef<{}[]>([]);

    const { annees } = dotation;

    const years = annees.map(annee => Object.keys(annee)[0]);

    const headersYears = years.map((year: string) => ({
        label: `Montant de l'année ${year}`,
        key: year,
    }));

    return (
        <>
            <div className="pb-4">
                <DropdownMenuDownload
                    headers={[
                        { label: "Dotations", key: "title" },
                        ...headersYears,
                    ]}
                    dataCSV={dotationTotalExport.current}
                />
            </div>
            <DotationCard dotation={dotation} borderTop borderBottom />

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
                        currentYearCriteres
                    );

                const criteresSorted = {
                    ...criteresEligibles,
                    ...criteresNonEligibles,
                };

                const criteresLength = Object.keys(criteresSorted).length;

                return (
                    <div className="pt-10" key={sousDotation.title}>
                        <>
                            <DotationCard
                                dotation={sousDotation}
                                borderTop
                                borderBottom={
                                    !criteresLength ||
                                    isDotationsAnneesDifferentThanCriteresAnnees
                                }
                            />

                            {!isDotationsAnneesDifferentThanCriteresAnnees && (
                                <>
                                    <ParameterCardTitle
                                        criteresLength={criteresLength}
                                    />

                                    {!_.isEmpty(criteresSorted) &&
                                        Object.keys(criteresSorted).map(
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
                                                        Object.keys(
                                                            criteresSorted
                                                        ).length -
                                                            1 ===
                                                        indexEligible
                                                    }
                                                />
                                            )
                                        )}
                                </>
                            )}
                        </>
                    </div>
                );
            })}
        </>
    );
};

export default SubTabSousDotations;
