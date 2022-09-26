import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
    background: var(--green-tilleul-verveine-975);
    margin: 40px 120px;
    padding: 24px 32px;
    text-align: center;
`;

export default function DashboardFooter() {
    return (
        <StyledFooter>
            Les montants des dotations sont calculés sur la base de la{" "}
            <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044637640">
                <a rel="noopener noreferrer" target="_">
                    loi de finances 2022{" "}
                </a>
            </Link>
            avec les{" "}
            <Link
                href="http://www.dotations-dgcl.interieur.gouv.fr/consultation/informations_repartition.php"
                rel="noopener noreferrer"
                target="_"
            >
                <a rel="noopener noreferrer" target="_">
                    critères de répartitions 2022.
                </a>
            </Link>
            <br />
            Pour rappel, seule la notification officielle de la DGF fait foi.
        </StyledFooter>
    );
}
