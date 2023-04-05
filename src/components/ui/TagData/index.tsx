import { IconVectorDown, IconVectorUp } from "components/ui";
import styled from "styled-components";

const StyledTagData = styled.div<{ position?: string }>`
    justify-content: ${({ position }) => position};
`;

interface TagDataProps {
    percentage?: number | null;
    valeur?: string;
    position?: string;
}

const TagData = ({ percentage, valeur, position }: TagDataProps) => {
    const percentageIsPositive = percentage && percentage >= 0;

    return (
        <StyledTagData
            className="text-sm flex items-center"
            position={position}
        >
            {percentage ? (
                percentageIsPositive ? (
                    <IconVectorUp />
                ) : (
                    <IconVectorDown />
                )
            ) : null}
            <span className="ml-1 font-bold">{valeur}</span>
        </StyledTagData>
    );
};

export default TagData;
