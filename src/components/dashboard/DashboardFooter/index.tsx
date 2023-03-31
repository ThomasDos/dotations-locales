import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
    background: var(--green-tilleul-verveine-975);
    padding: 24px 32px;
    margin: 20px;
    text-align: center;
    @media (min-width: 640px) {
        margin: 40px 120px;
    }
`;

export default function DashboardFooter() {
    return (
        <StyledFooter>
            Pour rappel, seule la notification officielle émise par la{" "}
            <Link
                href="http://www.dotations-dgcl.interieur.gouv.fr/consultation/dotations_en_ligne.php"
                rel="noopener noreferrer"
                target="_">
                    Direction Générale des Collectivités Locales (DGCL)
            </Link> fait foi. Notre plateforme vous en facilite l'accès et la compréhension.
        </StyledFooter>
    );
}
