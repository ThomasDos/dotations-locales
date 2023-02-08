import { useSelector } from "react-redux";
import { selectSimulationAvertissementPrecisionSimulation } from "store/simulationEntity.slice";
import styled from "styled-components";
import WarningDefaultMessage from "./WarningDefaultMessage";
import WarningPrecisionAlert from "./WarningPrecisionAlert";

const StyledContainer = styled.div`
    background-color: #ffe8e5;
`;

export default function SimulationWarning() {
    const avertissementPrecisionSimulation = useSelector(
        selectSimulationAvertissementPrecisionSimulation
    );
    return (
        <StyledContainer className="mb-10 p-5">
            {avertissementPrecisionSimulation ? (
                <WarningPrecisionAlert />
            ) : (
                <WarningDefaultMessage />
            )}
        </StyledContainer>
    );
}
