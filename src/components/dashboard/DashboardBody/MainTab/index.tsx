import { Collapse } from "@mui/material";
import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import type { Dotation, Dotations } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import {
    selectAllYears,
    selectCurrentYear,
    selectLastYear,
} from "store/simulationCommune.slice";
import formatDotationsToExportCsv from "utils/formatDotationsToExportCsv";
import getTotalDotations from "utils/getTotalDotations";
import sortDotationsEligiblesOrNonEligibles from "utils/sortDotationsEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleDotationsEligibles from "../TitleDotationsEligibles";
import TitleDotationsNonEligibles from "../TitleDotationsNonEligibles";

interface MainTabProps {
    dotations: Dotations;
}

const MainTab = ({ dotations }: MainTabProps) => {
    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);
    const years = useSelector(selectAllYears);

    const [showNonEligible, setShowNonEligible] = useState(false);

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
        description: "Evolution de votre montant total de dotations",
        label: "Résumé",
        title: "Dotations Générales de Fonctionnement (DGF)",
    };

    const headersYears = years.map((year: string) => ({
        label: `Montant de l'année ${year}`,
        key: year,
    }));
    const dotationsCurrentYearFormattedToExportCSV =
        formatDotationsToExportCsv(dotations);

    return (
        <div className="pt-10">
            <div className="pb-4 flex justify-end">
                <DropdownMenuDownload
                    headers={[
                        { label: "Dotations", key: "title" },
                        ...headersYears,
                    ]}
                    dataCSV={dotationsCurrentYearFormattedToExportCSV}
                />
            </div>
            <DotationCard
                hasInformation={false}
                dotation={dotationDGF}
                borderTop
                handleClick={() => {
                    matomoTrackEvent([
                        "dashboard",
                        "clique",
                        "titre",
                        dotationDGF.title,
                    ]);
                }}
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
                                    handleClick={() => {
                                        matomoTrackEvent([
                                            "dashboard",
                                            "clique",
                                            "titre",
                                            dotationsEligibles[
                                                dotationEligibleKey
                                            ].title,
                                        ]);
                                    }}
                                />
                            );
                        }
                    )}
                </>
            ) : null}

            {countDotationsNonEligiblesDotations ? (
                <>
                    <TitleDotationsNonEligibles
                        countNonEligibleDotations={
                            countDotationsNonEligiblesDotations
                        }
                        setShowNonEligible={setShowNonEligible}
                        showNonEligible={showNonEligible}
                    />
                    <Collapse in={showNonEligible}>
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
                    </Collapse>
                </>
            ) : null}
        </div>
    );
};

export default MainTab;
