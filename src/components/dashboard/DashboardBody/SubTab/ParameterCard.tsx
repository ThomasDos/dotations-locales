import { Critere } from "models/entity/entity.interface";
import styled from "styled-components";
import ParameterCardValue from "./ParameterCardValue";

const StyledParameterCard = styled.div<{
    backgroundColor: boolean;
    isLast: boolean;
}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--grey-950);
    border-bottom: ${({ isLast }) => (isLast ? "" : "none")};
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

    return (
        <StyledParameterCard
            backgroundColor={backgroundColor}
            isLast={!!isLast}
        >
            <>
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
                <ParameterCardValue critere={critere} />
            </>
        </StyledParameterCard>
    );
};

export default ParameterCard;
