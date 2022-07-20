import styled from "styled-components";

interface Buttonprops {
    text: string;
}

const ButtonContainer = styled.button`
    width: 100%;
    background-color: var(--blue-france-113);
    padding: 12px 66px;
    color: var(--blue-france-975);
    :hover {
        background-color: var(--blue-france-113) !important;
        color: var(--blue-france-975);
    }
`;
const Button = ({ text }: Buttonprops) => {
    return <ButtonContainer type="button">{text}</ButtonContainer>;
};

export default Button;
