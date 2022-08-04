import {
    IconInformation,
    LabelGreyCustomCrossIcon,
    LabelPercentage,
} from "components/ui";
import type { Dotation } from "models/commune/commune.interface";
import styled from "styled-components";

const ParameterCardContainer = styled.div<{
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

const CardTitleContainer = styled.span`
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
`;

interface ParameterCardProps {
    hasInformation?: boolean;
    parameter: Dotation;
    backgroundColor?: boolean;
}

const ParameterCard = ({
    parameter,
    hasInformation = true,
    backgroundColor = false,
}: ParameterCardProps) => {
    const currentYearTotal = parameter.annees[0][new Date().getFullYear()];
    const lastYear = parameter.annees[1][new Date().getFullYear() - 1];

    const percentageEvolution = Number(
        ((currentYearTotal / lastYear - 1) * 100).toFixed(2)
    );
    const { title, description } = parameter;

    return (
        <ParameterCardContainer backgroundColor={backgroundColor}>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <CardTitleContainer className="mb-2 mr-1">
                            {title}
                        </CardTitleContainer>
                        {hasInformation && (
                            <div className="cursor-help">
                                <IconInformation />
                            </div>
                        )}
                    </div>
                    <span className="text-xs">{description}</span>
                </div>
                {currentYearTotal ? (
                    <div className="flex flex-col items-end">
                        <div className="flex mb-2 items-center">
                            <LabelPercentage percentage={percentageEvolution} />
                        </div>
                        <span className="text-sm">valeur donnée par back</span>
                    </div>
                ) : (
                    <div>
                        <LabelGreyCustomCrossIcon text="Non éligible" />
                    </div>
                )}
            </div>
        </ParameterCardContainer>
    );
};

export default ParameterCard;
