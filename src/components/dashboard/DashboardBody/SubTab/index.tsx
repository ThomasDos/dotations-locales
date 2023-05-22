import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import _ from "lodash";
import { Dotation } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import { selectCurrentYearCriteres } from "store/simulationEntity.slice";
import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import sortCriteresEligiblesOrNonEligibles from "utils/sortCriteresEligiblesOrNonEligibles";

import { selectFichiersDotationWithDotation } from "store/appSettings.slice";
import { selectIsDotationsAnneesDifferentThanCriteresAnnees } from "store/initialEntity.slice";
import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";
import ParameterCardTitle from "./ParameterCardTitle";
import SubTabSousDotations from "./SubTabSousDotations";

interface SubTabProps {
    dotation: Dotation;
}

const SubTab = ({ dotation }: SubTabProps) => {
    const currentYearCriteres = useSelector(selectCurrentYearCriteres);
    const dotationFichiers = useSelector(
        selectFichiersDotationWithDotation(dotation.key)
    );
    const isDotationsAnneesDifferentThanCriteresAnnees = useSelector(
        selectIsDotationsAnneesDifferentThanCriteresAnnees
    );

    const { annees, label } = dotation;

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
        sortCriteresEligiblesOrNonEligibles(criteres, currentYearCriteres);
    const criteresSorted = { ...criteresEligibles, ...criteresNonEligibles };

    const criteresLength = Object.keys(criteresSorted).length;

    return (
        <div className="pt-10">
            {sousDotations ? (
                <SubTabSousDotations
                    dotation={dotation}
                    sousDotations={sousDotations}
                />
            ) : (
                <>
                    <div className="pb-4">
                        <DropdownMenuDownload
                            headers={[
                                { label: title, key: "title" },
                                ...headersYears,
                            ]}
                            dataCSV={dotationFormattedToExportCsv}
                            fichiers={dotationFichiers}
                            fichiersEntity={label}
                        />
                    </div>
                    <>
                        <DotationCard
                            dotation={dotation}
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
                                                    criteresSorted[criteresKey]
                                                }
                                                isLast={
                                                    Object.keys(criteresSorted)
                                                        .length -
                                                        1 ===
                                                    indexEligible
                                                }
                                            />
                                        )
                                    )}
                            </>
                        )}
                    </>
                </>
            )}
        </div>
    );
};

export default SubTab;
