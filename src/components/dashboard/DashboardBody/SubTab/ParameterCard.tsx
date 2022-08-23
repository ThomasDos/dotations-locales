import { IconInformation } from "components/ui";
import styled from "styled-components";

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
    parameter: { valeur: string; unite: string | null };
    backgroundColor?: boolean;
}

const ParameterCard = ({
    parameter,
    hasInformation = true,
    backgroundColor = false,
}: ParameterCardProps) => {
    const { valeur } = parameter;

    return (
        <StyledParameterCard backgroundColor={backgroundColor}>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <StyledCardTitle className="mb-2 mr-1">
                            TITLE
                        </StyledCardTitle>
                        {hasInformation && (
                            <div className="cursor-help">
                                <IconInformation />
                            </div>
                        )}
                    </div>
                    <span className="text-xs">{valeur}</span>
                </div>
                {/* {currentYearTotal ? (
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
                )} */}
            </div>
        </StyledParameterCard>
    );
};

export default ParameterCard;
