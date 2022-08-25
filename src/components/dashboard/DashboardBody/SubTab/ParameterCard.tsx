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

    // let totalEvolution = 0;
    let percentageEvolution = 0;
    if (!valeurIsNotNumber) {
        // totalEvolution = Number(currentYearValeur) - Number(lastYearValeur);
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
                        <div className="flex items-center">
                            <span className="mr-2">
                                {!valeurIsNotNumber &&
                                    `${formatNumberWithSpace(
                                        Number(currentYearValeur)
                                    )} ${unite ? " " + unite : ""}`}
                            </span>
                        </div>
                        <div className="flex mb-2 items-center">
                            {valeurIsLabel ? (
                                currentYearValeur === "Oui" ? (
                                    <LabelGreenCustomCrossIcon text="Oui" />
                                ) : (
                                    <LabelGreyCustomCrossIcon text="Non" />
                                )
                            ) : (
                                percentageEvolution && (
                                    <div className="flex items-center">
                                        <LabelPercentage
                                            percentage={percentageEvolution}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        {/* {totalEvolution ? (
                            <div className="flex items-center">
                                <span className="mr-2">
                                    {totalEvolution > 0 ? "+" : ""}
                                    {formatNumberWithSpace(totalEvolution)}
                                    {unite && " " + unite}
                                </span>
                            </div>
                        ) : null} */}
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
