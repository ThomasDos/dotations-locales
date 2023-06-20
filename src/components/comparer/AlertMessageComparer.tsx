import { Badge } from "@dataesr/react-dsfr";
import styled from "styled-components";

const StyledContainer = styled.div`
    border: 2px solid var(--yellow-tournesol-950-100);
    padding: 32px 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 180px;
    @media (min-width: 640px) {
        margin-bottom: 380px;
        width: 75%;
    }

    @media (min-width: 940px) {
        width: 60%;
    }

    @media (min-width: 1024px) {
        width: 50%;
    }
`;

const AlertMessageComparer = () => {
    return (
        <StyledContainer>
            <Badge text="IMPORTANT" hasIcon />

            <span className="my-3">
                La comparaison des montants des dotations entre collectivités
                peut varier considérablement en raison de plusieurs facteurs,
                tels que la taille de la population de la strate dans laquelle
                la collectivité se trouve, ainsi que l&apos;historique des
                événements associés à cette dernière.
            </span>

            <span className="font-bold">
                Cette fonctionnalité va bientôt évoluer pour vous offrir des
                outils de comparaison améliorés.
            </span>
        </StyledContainer>
    );
};

export default AlertMessageComparer;
