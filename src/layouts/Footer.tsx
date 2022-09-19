import {
    Footer,
    FooterBody,
    FooterBodyItem,
    FooterBottom,
    FooterCopy,
    FooterLink,
    FooterOperator,
    Link,
    Logo,
} from "@dataesr/react-dsfr";
import Image from "next/image";
import styled from "styled-components";

export const FooterMain = styled(Footer)`
    z-index: 100 !important;
`;

const FooterContainer = () => {
    return (
        <FooterMain>
            <FooterBody description="𝐃𝐨𝐭𝐚𝐭𝐢𝐨𝐧𝐬 𝐥𝐨𝐜𝐚𝐥𝐞𝐬 est une Startup d’État en construction incubée par l’Incubateur des Territoires de l’Agence Nationale de la Cohésion des Territoires (ANCT).">
                <Logo splitCharacter={10}>RÉPUBLIQUE FRANÇAISE</Logo>
                <FooterOperator>
                    <Image
                        src="/icons/incubateur-territoires.svg"
                        height="90px"
                        width="160px"
                        alt="logo incubateur territoires"
                        layout="fixed"
                    />
                </FooterOperator>
                <FooterBodyItem>
                    <Link href="https://legifrance.gouv.fr" className="mr-3">
                        legifrance.gouv.fr
                    </Link>
                    <Link href="https://gouvernement.fr" className="mx-3">
                        gouvernement.fr
                    </Link>
                    <Link href="https://service-public.fr" className="mx-3">
                        service-public.fr
                    </Link>
                    <Link href="https://data.gouv.fr" className="ml-3">
                        data.gouv.fr
                    </Link>
                </FooterBodyItem>
            </FooterBody>
            <FooterBottom>
                <FooterLink href="/">Plan du site</FooterLink>
                <FooterLink href="/">Accessibilité</FooterLink>
                <FooterLink href="/">Mentions légales</FooterLink>
                <FooterLink href="/">Données personnelles</FooterLink>
                <FooterLink href="/">Gestion des cookies</FooterLink>
                <FooterLink href="/">
                    <Image
                        src="/icons/half-sun.svg"
                        height="16px"
                        width="16px"
                        alt="icon paramètre d'affichage"
                        layout="fixed"
                    />

                    <span className="ml-2">Paramètres d&apos;affichage</span>
                </FooterLink>

                {/* TODO:LINK TO REPLACE : https://spdx.org/licenses/AGPL-3.0-or-later.html#licenseText  */}
                <FooterCopy>licence AGPL3</FooterCopy>
            </FooterBottom>
        </FooterMain>
    );
};

export default FooterContainer;
