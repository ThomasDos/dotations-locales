import { Badge } from "@dataesr/react-dsfr";
import { LabelGreyCustomCrossIcon, LabelPercentage } from "components/ui";
import type { Critere } from "models/commune/commune.interface";
import { useSelector } from "react-redux";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

const StyledParameterCard = styled.div<{
    backgroundColor: boolean;
}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--blue-france-850);
    border-bottom: 1px solid var(--grey-950);
    border-top: none;
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? "var(--blue-france-975)" : "none"};
    padding: 16px;
    @media (min-width: 640px) {
        padding: 16px 48px 16px 32px;
    }
`;

const StyledCardTitle = styled.span`
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
`;

interface ParameterCardProps {
    critere: Critere;
    backgroundColor?: boolean;
}

const ParameterCard = ({
    critere,
    backgroundColor = false,
}: ParameterCardProps) => {
    const { description } = critere;

    const currentYear = useSelector(selectCurrentYear);
    const lastYear = useSelector(selectLastYear);

    const currentYearCritere = critere.annees[0][currentYear];
    const lastYearCritere = critere.annees[1][lastYear];

    const { valeur: currentYearValeur, unite } = currentYearCritere;
    const { valeur: lastYearValeur } = lastYearCritere;

    const valeurToNumber = Number(currentYearCritere.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);

    const valeurIsLabel =
        currentYearValeur === "Non" || currentYearValeur === "Oui";

    let percentageEvolution = 0;
    if (!valeurIsNotNumber) {
        percentageEvolution = getPercentageEvolution(
            currentYearValeur as number,
            lastYearValeur as number
        );
    }

    return (
        <StyledParameterCard backgroundColor={backgroundColor}>
            <div className="flex flex-col">
                <div className="flex">
                    <StyledCardTitle className="mb-2 mr-1">
                        {description}
                    </StyledCardTitle>
                    {/* 
                        //TODO: réactiver quand feature info prête
                        { && (
                            <div className="cursor-help">
                                <IconInformation />
                            </div>
                        )} */}
                </div>
            </div>
            {currentYearValeur ? (
                <div className="flex flex-col items-end">
                    <div className="flex mb-2 items-center">
                        {valeurIsLabel ? (
                            currentYearValeur === "Oui" ? (
                                <Badge text="Oui" type="success" hasIcon />
                            ) : (
                                <LabelGreyCustomCrossIcon text="Non" />
                            )
                        ) : Number(currentYearValeur) === 0 ? (
                            <LabelGreyCustomCrossIcon text="Non éligible" />
                        ) : (
                            <LabelPercentage
                                valeur={`${formatNumberWithSpace(
                                    Number(currentYearValeur)
                                )} ${unite ? " " + unite : ""}`}
                                percentage={percentageEvolution}
                                hasBackgroundColor={false}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <LabelGreyCustomCrossIcon text="Non éligible" />
                </div>
            )}
        </StyledParameterCard>
    );
};

export default ParameterCard;
