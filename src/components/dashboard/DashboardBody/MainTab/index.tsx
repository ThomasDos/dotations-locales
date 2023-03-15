import { Accordion, AccordionItem, Badge } from "@dataesr/react-dsfr";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import { dotationsMap } from "constants/dotationsMap";
import type { Dotation, Dotations } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import { selectInitialPartDotationRrf } from "store/initialEntity.slice";
import {
    selectAllYears,
    selectCurrentYear,
    selectLastYear,
} from "store/simulationEntity.slice";
import formatDotationsToExportCsv from "utils/formatDotationsToExportCsv";
import formatRrfEvolution from "utils/formatRrfEvolution";
import getTotalDotations from "utils/getTotalDotations";
import sortDotationsEligiblesOrNonEligibles from "utils/sortDotationsEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleDotationsEligibles from "../TitleDotationsEligibles";

interface MainTabProps {
    dotations: Dotations;
}

const MainTab = ({ dotations }: MainTabProps) => {
    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);
    const years = useSelector(selectAllYears);
    const partDotationRrf = useSelector(selectInitialPartDotationRrf);

    const rrfFormatted = formatRrfEvolution(partDotationRrf);

    const currentYearTotal = getTotalDotations(dotations, currentYear);
    const lastYearTotal = getTotalDotations(dotations, lastYear);

    const { dotationsEligibles, dotationsNonEligibles } =
        sortDotationsEligiblesOrNonEligibles(dotations, currentYear);
    const dotationsEligiblesKeys = Object.keys(dotationsEligibles);
    const dotationsNonEligiblesKeys = Object.keys(dotationsNonEligibles);

    const countDotationsEligiblesDotations = dotationsEligiblesKeys.length;
    const countDotationsNonEligiblesDotations =
        dotationsNonEligiblesKeys.length;

    const dotationDGF: Dotation = {
        annees: [
            { [currentYear]: currentYearTotal },
            { [lastYear]: lastYearTotal },
        ],
        criteres: {},
        ...dotationsMap.dotationGlobaleFonctionnement,
    };

    const headersYears = years.map((year: string) => ({
        label: `Montant de l'année ${year}`,
        key: year,
    }));
    const dotationsCurrentYearFormattedToExportCSV =
        formatDotationsToExportCsv(dotations);

    const ifPluralS = countDotationsNonEligiblesDotations > 1 ? "s" : "";
    const titleAccordion = `${countDotationsNonEligiblesDotations} autre${ifPluralS} dotation${ifPluralS} non éligible${ifPluralS}`;

    return (
        <div className="pt-10">
            <div className="pb-4">
                <DropdownMenuDownload
                    headers={[
                        { label: "Dotations", key: "title" },
                        ...headersYears,
                    ]}
                    dataCSV={dotationsCurrentYearFormattedToExportCSV}
                />
            </div>
            <DotationCard
                dotation={dotationDGF}
                borderTop
                rrfFormatted={rrfFormatted}
            />
            {countDotationsEligiblesDotations ? (
                <>
                    <TitleDotationsEligibles
                        countEligibleDotations={
                            countDotationsEligiblesDotations
                        }
                    />
                    {dotationsEligiblesKeys.map(
                        (dotationEligibleKey, index) => {
                            return (
                                <DotationCard
                                    key={dotationEligibleKey}
                                    dotation={
                                        dotationsEligibles[dotationEligibleKey]
                                    }
                                    borderTop={index === 0}
                                />
                            );
                        }
                    )}
                </>
            ) : null}

            {!!countDotationsNonEligiblesDotations && (
                <Accordion size="sm" className="my-10">
                    <AccordionItem
                        title={titleAccordion}
                        className="box-border"
                    >
                        {dotationsNonEligiblesKeys.map(
                            (dotationNonEligibleKey, index) => {
                                return (
                                    <DotationCard
                                        key={dotationNonEligibleKey}
                                        dotation={
                                            dotationsNonEligibles[
                                                dotationNonEligibleKey
                                            ]
                                        }
                                        borderTop={index === 0}
                                    />
                                );
                            }
                        )}
                    </AccordionItem>
                </Accordion>
            )}
            {dotations.dotationEluLocal && (
                <div>
                    <div className="mb-4">
                        <Badge type="new" text="Autres dotations (hors dgf)" />
                    </div>
                    <DotationCard
                        dotation={dotations.dotationEluLocal}
                        borderTop
                    />
                </div>
            )}
        </div>
    );
};

export default MainTab;
