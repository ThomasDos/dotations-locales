import { useSelector } from "react-redux";
import { selectBaseCalcul } from "store/appSettings.slice";
import styled from "styled-components";

const StyledLoiLabel = styled.div`
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    margin: 0 4px;
    background-color: var(--grey-950);
    border-radius: 40px;
    padding: 2px 8px;
    display: flex;
    align-self: center;
`;

export default function BaseCalculLoi() {
    const baseCalcul = useSelector(selectBaseCalcul);
    if (!baseCalcul) return null;
    return (
        <div className="flex items-center">
            <span className="text-sm mr-1 hidden md:block">
                Base de calcul :{" "}
            </span>
            <StyledLoiLabel>{baseCalcul}</StyledLoiLabel>
        </div>
    );
}
