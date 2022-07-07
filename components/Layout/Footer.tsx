import { Footer, FooterBody, FooterBodyItem, Link } from "@dataesr/react-dsfr";

const FooterContainer = () => {
    return (
        <Footer>
            <FooterBody description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                <FooterBodyItem>
                    <Link href="https://service-public.fr">
                        service-public.fr
                    </Link>
                </FooterBodyItem>
            </FooterBody>
        </Footer>
    );
};

export default FooterContainer;
