import Image from "next/image";
import styled from "styled-components";

interface LabelTextProps {
    text: string;
    backgroundColor?: string;
    borderColor?: string;
    icon?: string;
    color?: string;
}

interface LabelTextContainerProps {
    backgroundColor: string;
    color: string;
    borderColor: string | undefined;
}

const StyledLabelText = styled.div<LabelTextContainerProps>`
    border-radius: 40px;
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    border: ${({ borderColor }) =>
        borderColor ? `${borderColor} solid 1px` : "none"};
`;

const LabelText = ({
    text,
    icon,
    backgroundColor = "#eeeeee",
    color = "#000000",
    borderColor,
}: LabelTextProps) => {
    return (
        <StyledLabelText
            className="py-1 px-4 flex justify-center items-center text-sm"
            backgroundColor={backgroundColor}
            color={color}
            borderColor={borderColor}
        >
            {icon && (
                <div className="flex items-center">
                    <Image
                        src={`/icons/${icon}`}
                        height="12px"
                        width="12px"
                        alt="icone croix"
                    />
                </div>
            )}
            <span className={`${icon ? "ml-2" : ""}`}>{text}</span>
        </StyledLabelText>
    );
};

export default LabelText;
