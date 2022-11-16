import ImageFixed from "components/ui/ImageFixed";
import styled from "styled-components";

interface Buttonprops {
    text: string;
    icon?: string;
    onClick?: () => void;
    backgroundColor?: string;
    backgroundColorHover?: string;
}

const StyledButton = styled.button<{
    backgroundColor?: string;
    backgroundColorHover?: string;
}>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ backgroundColor }) =>
        backgroundColor || "var(--blue-france-113)"};
    padding: 12px 66px;
    margin-top: 16px;
    color: var(--blue-france-975);
    :hover {
        background-color: ${({ backgroundColorHover }) =>
            backgroundColorHover || "#000091df"} !important;
        color: var(--blue-france-975);
    }
`;
const Button = ({
    text,
    icon,
    onClick,
    backgroundColor,
    backgroundColorHover,
}: Buttonprops) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            backgroundColor={backgroundColor}
            backgroundColorHover={backgroundColorHover}
        >
            {icon && (
                <ImageFixed
                    src={`/icons/${icon}.svg`}
                    width={24}
                    height={24}
                    alt={`icone ${text}`}
                />
            )}
            <span className={icon ? "ml-2" : ""}>{text}</span>
        </StyledButton>
    );
};

export default Button;
