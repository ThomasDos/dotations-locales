import Image from "next/image";
import styled from "styled-components";

interface Buttonprops {
    text: string;
    icon?: string;
    onClick?: () => void;
}

const StyledButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-france-113);
    padding: 12px 66px;
    margin-top: 16px;
    color: var(--blue-france-975);
    :hover {
        background-color: var(--blue-france-113) !important;
        color: var(--blue-france-975);
    }
`;
const Button = ({ text, icon, onClick }: Buttonprops) => {
    return (
        <StyledButton type="button" onClick={onClick}>
            {icon && (
                <div className="flex">
                    <Image
                        src={`/icons/${icon}.svg`}
                        width="24px"
                        height="24px"
                        layout="fixed"
                        alt={`icone ${text}`}
                    />
                </div>
            )}
            <span className={icon ? "ml-2" : ""}>{text}</span>
        </StyledButton>
    );
};

export default Button;
