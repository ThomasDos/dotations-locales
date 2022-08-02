import Image from "next/image";
import styled from "styled-components";

interface Buttonprops {
    text: string;
    icon?: string;
}

const ButtonContainer = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--blue-france-113);
    padding: 12px 66px;
    color: var(--blue-france-975);
    :hover {
        background-color: var(--blue-france-113) !important;
        color: var(--blue-france-975);
    }
`;
const Button = ({ text, icon }: Buttonprops) => {
    return (
        <ButtonContainer type="button">
            {icon && (
                <Image
                    src={`/icons/${icon}.svg`}
                    width="20.8px"
                    height="24px"
                    layout="fixed"
                    alt={`icone ${text}`}
                />
            )}
            <span className={icon ? "ml-2" : ""}>{text}</span>
        </ButtonContainer>
    );
};

export default Button;
