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
            Les montants des dotations sont calculés sur la base de la{" "}
            <Link
                href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044637640"
                rel="noopener noreferrer"
                target="_"
            >
                loi de finances 2022{" "}
            </Link>
            avec les{" "}
            <Link
                href="http://www.dotations-dgcl.interieur.gouv.fr/consultation/informations_repartition.php"
                rel="noopener noreferrer"
                target="_"
            >
                critères de répartitions 2022.
            </Link>
            <br />
            Pour rappel, seule la notification officielle de la DGF fait foi.
        </StyledFooter>
    );
}
