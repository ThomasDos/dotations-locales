import styled from "styled-components";

const StyledContainer = styled.div`
    background-color: #ffe8e5;
`;

export default function SimulationWarning() {
    return (
        <StyledContainer className="mb-10 p-5">
            <div className="text-error-425 font-bold mb-1">
                Mise en garde sur les résultats de votre simulation
            </div>
            <div className="text-sm">
                Les montants de votre simulation sont susceptibles de varier à
                la hausse ou à la baisse en fonction des évolutions des autres
                collectivités de la Métropole, toutes choses étant égales par
                ailleurs.
            </div>
        </StyledContainer>
    );
}
