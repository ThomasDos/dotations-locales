import { Badge } from "@dataesr/react-dsfr";
import { LabelGreyCustomCrossIcon, LabelPercentage } from "components/ui";
import { Critere } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import {
    selectCurrentYear,
    selectLastYear,
} from "store/simulationEntity.slice";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

const StyledParameterCard = styled.div<{
    backgroundColor: boolean;
    isLast: boolean;
}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid var(--blue-france-850);
    border-right: 1px solid var(--blue-france-850);
    border-bottom: 1px solid
        var(--${props => (props.isLast ? "blue-france-850" : "grey-950")});
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
    isLast?: boolean;
}

const ParameterCard = ({
    critere,
    backgroundColor = false,
    isLast,
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
        <StyledParameterCard
            backgroundColor={backgroundColor}
            isLast={!!isLast}
        >
            <div className="flex flex-col justify-center items-center">
                <StyledCardTitle>{description}</StyledCardTitle>
                {/* 
                    //TODO: réactiver quand feature info prête
                    { && (
                        <div className="cursor-help">
                            <IconInformation />
                        </div>
                    )} */}
            </div>
            {currentYearValeur ? (
                <div className="flex flex-col items-end">
                    <div className="flex items-center">
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
