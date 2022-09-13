import { Collapse } from "@mui/material";
import type { Dotation, Dotations } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationCommune.slice";
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
