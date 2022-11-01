import {
    Footer,
    FooterBody,
    FooterBodyItem,
    FooterBottom,
    FooterLink,
    FooterOperator,
    Link,
    Logo,
} from "@dataesr/react-dsfr";
import Image from "next/image";
import styled from "styled-components";

const FooterMain = styled(Footer)`
    z-index: 100 !important;
`;

const StyledLogo = styled(Logo)`
    background-image: none;
`;

const FooterContainer = () => {
    return (
        <FooterMain>
            <FooterBody description="Dotations Locales est une Startup d’État en construction incubée par l’Incubateur des Territoires de l’Agence Nationale de la Cohésion des Territoires (ANCT).">
                <FooterOperator>
                    <StyledLogo splitCharacter={10}>
                        RÉPUBLIQUE FRANÇAISE
                    </StyledLogo>
                    <div className="ml-5">
                        <Image
                            src="/icons/incubateur-territoires.svg"
                            height={90}
                            width={160}
                            alt="logo incubateur territoires"
                        />
                    </div>
                </FooterOperator>
                <FooterBodyItem>
                    <Link
                        href="https://legifrance.gouv.fr"
                        className="mr-3"
                        target="_"
                    >
                        legifrance.gouv.fr
                    </Link>
                    <Link
                        href="https://gouvernement.fr"
                        className="mx-3"
                        target="_"
                    >
                        gouvernement.fr
                    </Link>
                    <Link
                        href="https://service-public.fr"
                        className="mx-3"
                        target="_"
                    >
                        service-public.fr
                    </Link>
                    <Link
                        href="https://data.gouv.fr"
                        className="ml-3"
                        target="_"
                    >
                        data.gouv.fr
                    </Link>
                </FooterBodyItem>
            </FooterBody>
            <FooterBottom>
                <FooterLink
                    href="https://spdx.org/licenses/AGPL-3.0-or-later.html#licenseText"
                    target="_"
                >
                    licence AGPL3
                </FooterLink>
                <FooterLink
                    href="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=259&period=range&date=previous30#?period=range&date=previous30&category=Dashboard_Dashboard&subcategory=1&idSite=259"
                    target="_"
                >
                    statistiques
                </FooterLink>
            </FooterBottom>
        </FooterMain>
    );
};

export default FooterContainer;
