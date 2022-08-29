import {
    IconInformation,
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
    LabelPercentage,
} from "components/ui";
import type { Critere } from "models/commune/commune.interface";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";
import getPercentageEvolution from "utils/getPercentageEvolution";

const StyledParameterCard = styled.div<{
    backgroundColor: boolean;
}>`
    padding: 16px 48px 16px 32px;
    display: flex;
    flex-direction: column;

    border: 1px solid var(--blue-france-850);
    border-top: none;
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? "var(--blue-france-975)" : "none"};
`;

const StyledCardTitle = styled.span`
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
`;

interface ParameterCardProps {
    hasInformation?: boolean;
    critere: Critere;
    backgroundColor?: boolean;
}

const ParameterCard = ({
    critere,
    hasInformation = true,
    backgroundColor = false,
}: ParameterCardProps) => {
    const { description } = critere;

    const currentYear = critere.annees[0][new Date().getFullYear()];
    const lastYear = critere.annees[1][new Date().getFullYear() - 1];

    const { valeur: currentYearValeur, unite } = currentYear;
    const { valeur: lastYearValeur } = lastYear;

    const valeurToNumber = Number(currentYear.valeur);
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
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <StyledCardTitle className="mb-2 mr-1">
                            {description}
                        </StyledCardTitle>
                        {hasInformation && (
                            <div className="cursor-help">
                                <IconInformation />
                            </div>
                        )}
                    </div>
                </div>
                {currentYearValeur ? (
                    <div className="flex flex-col items-end">
                        <div className="flex mb-2 items-center">
                            {valeurIsLabel ? (
                                currentYearValeur === "Oui" ? (
                                    <LabelGreenCustomCrossIcon text="Oui" />
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
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <div>
                        <LabelGreyCustomCrossIcon text="Non éligible" />
                    </div>
                )}
            </div>
        </StyledParameterCard>
    );
};

export default ParameterCard;
