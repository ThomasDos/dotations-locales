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

const FooterContainer = () => {
    return (
        <Footer>
            <FooterBody description="Texte optionnel 3 lignes maximum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et vel quam auctor semper. Cras si amet mollis dolor.">
                <Logo splitCharacter={10}>RÉPUBLIQUE FRANÇAISE</Logo>
                <FooterOperator>
                    <Image
                        src="/icons/incubateur-territoires.svg"
                        height="90px"
                        width="160px"
                        alt="logo incubateur territoires"
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
                        height="14.67px"
                        width="14.67px"
                        alt="icon paramètre d'affichage"
                    />

                    <span className="ml-2">Paramètres d&apos;affichage</span>
                </FooterLink>
                <FooterCopy>licence etalab-2.0</FooterCopy>
            </FooterBottom>
        </Footer>
    );
};

export default FooterContainer;
