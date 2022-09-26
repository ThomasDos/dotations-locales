import { IconVectorDown, IconVectorUp } from "components/ui";
import styled from "styled-components";

const StyledTagData = styled.div<{ position?: string }>`
    justify-content: ${({ position }) => position};
`;

interface TagDataProps {
    percentage: number;
    valeur?: string;
    position?: string;
}

const TagData = ({ percentage, valeur, position }: TagDataProps) => {
    const percentageIsPositive = percentage >= 0;

    return (
        <StyledTagData className="text-sm flex" position={position}>
            {percentageIsPositive ? <IconVectorUp /> : <IconVectorDown />}
            <span className="ml-1 font-bold">{valeur}</span>
        </StyledTagData>
    );
};

export default TagData;
