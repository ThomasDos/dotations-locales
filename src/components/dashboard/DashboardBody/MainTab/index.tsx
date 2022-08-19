import { Collapse } from "@mui/material";
import type { Dotation } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectInitialDotations } from "store/initialCommune/initialCommune.slice";
import sortDotationsEligiblesOrNonEligibles from "utils/sortDotationsEligiblesOrNonEligibles";

import DotationCard from "../DotationCard";
import TitleDotationsEligibles from "../TitleDotationsEligibles";
import TitleDotationsNonEligibles from "../TitleDotationsNonEligibles";

interface MainTabProps {
    currentYear: number;
    currentYearTotal: number;
    lastYear: number;
    lastYearTotal: number;
}

const MainTab = ({
    currentYear,
    currentYearTotal,
    lastYear,
    lastYearTotal,
}: MainTabProps) => {
    const [showNonEligible, setShowNonEligible] = useState(false);
    const dotations = useSelector(selectInitialDotations);

    const { dotationsEligibles, dotationsNonEligibles } =
        sortDotationsEligiblesOrNonEligibles(dotations);
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
        description: "Evolution de votre montant total de dotations",
        title: "Dotations Générales de Fonctionnement (DGF)",
    };

    return (
        <div className="pt-10">
            <DotationCard
                hasInformation={false}
                dotation={dotationDGF}
                borderTop
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
                                    hasInformation={false}
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
                                        hasInformation={false}
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
