import ImageFixed from "components/ui/ImageFixed";
import styled from "styled-components";

interface LabelTextProps {
    text: string;
    backgroundColor?: string;
    borderColor?: string;
    icon?: string;
    color?: string;
    fontWeight?: string;
    fontSize?: string;
}

interface LabelTextContainerProps {
    backgroundColor: string;
    color: string;
    borderColor: string | undefined;
    fontWeight: string | undefined;
}

const StyledLabelText = styled.div<LabelTextContainerProps>`
    border-radius: 40px;
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    border: ${({ borderColor }) =>
        borderColor ? `${borderColor} solid 1px` : "none"};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
`;

const StyledSpanText = styled.span<{ fontSize?: string }>`
    font-size: ${({ fontSize }) => fontSize};
`;

const LabelText = ({
    text,
    icon,
    backgroundColor = "#eeeeee",
    color = "#000000",
    borderColor,
    fontWeight,
    fontSize,
}: LabelTextProps) => {
    return (
        <StyledLabelText
            className="py-1 px-2 sm:px-4 flex justify-center items-center text-xs sm:text-sm"
            backgroundColor={backgroundColor}
            color={color}
            borderColor={borderColor}
            fontWeight={fontWeight}
        >
            {icon && (
                <ImageFixed
                    src={`/icons/${icon}`}
                    height={12}
                    width={12}
                    alt="icone croix"
                />
            )}
            <StyledSpanText
                className={`${icon ? "ml-2" : ""}`}
                fontSize={fontSize}
            >
                {text}
            </StyledSpanText>
        </StyledLabelText>
    );
};

export default LabelText;
