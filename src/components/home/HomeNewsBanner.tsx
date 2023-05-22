import { Badge, Link } from "@dataesr/react-dsfr";
import useResize from "hooks/useResize";
import styled from "styled-components";

const StyledContainer = styled.div`
    background: #dbf4e3;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 8px;

    @media (min-width: 900px) {
        padding: 20px 0;
    }
`;

export default function HomeNewsBanner() {
    const { windowWidth } = useResize();
    return (
        <StyledContainer>
            <Badge text="INFO" type="info" isSmall={windowWidth < 768} />

            {/* <Badge text="NOUVEAU" type="info" isSmall={windowWidth < 768} /> */}
            <span className="ml-2 text-color-primary font-bold md:text-base text-sm">
                {/* Découvrez votre montant de votre dotation pour la Protection de
                la Biodiversité (DPB) 🌿 */}
                Retrouvez-nous à{" "}
                <Link
                    href="https://agence-cohesion-territoires.gouv.fr/anctour"
                    target="_"
                >
                    l&apos;ANCTour <b>à Paris</b> le 23 mai
                </Link>{" "}
                - Stand Solutions numériques
            </span>
        </StyledContainer>
    );
}
