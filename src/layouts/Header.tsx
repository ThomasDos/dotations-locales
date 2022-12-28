import Link from "next/link";
import { matomoTrackEvent } from "services/matomo";
import styled from "styled-components";

import {
    BurgerMenu,
    HorizontalSeparator,
    ImageFixed,
    LinkArrow,
} from "components/ui";

const StyledHeaderBody = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    @media (min-width: 768px) {
        padding: 16px;
    }
`;

const HeaderContainer = () => {
    const win: Window = window;
    return (
        <div>
            <StyledHeaderBody className="w-full flex justify-between">
                <div className="flex">
                    <div>
                        <Link href="/">
                            <div
                                onClick={() => {
                                    matomoTrackEvent([
                                        "header",
                                        "clique",
                                        "logo home",
                                    ]);
                                }}
                            >
                                <ImageFixed
                                    className="hidden sm:block cursor-pointer"
                                    src="/images/marianne-text-header-lg.png"
                                    height={90}
                                    width={88}
                                    alt="Logo de la marianne qui redirige vers l'accueil"
                                />

                                <ImageFixed
                                    className="sm:hidden cursor-pointer"
                                    src="/images/marianne-text-header-sm.png"
                                    height={78}
                                    width={174}
                                    alt="Logo de la marianne qui redirige vers l'accueil"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10 py-5 md:block hidden">
                        <h6 className="p-0 m-0">Dotations Locales</h6>
                        <span>
                            Tout savoir sur les dotations d&apos;état de votre
                            collectivité
                        </span>
                    </div>
                </div>
                <div>
                    <div className="hidden sm:flex items-center ml-8 py-5">
                        <Link
                            href="https://beta.gouv.fr/startups/dotations-locales.html"
                            rel="noopener noreferrer"
                            target="_"
                            style={{ all: "unset" }}
                        >
                            <LinkArrow textLink="Notre mission" />
                        </Link>
                        <HorizontalSeparator />
                        <Link
                            href="mailto:contact-dotations-locales@anct.gouv.fr"
                            style={{ all: "unset" }}
                        >
                            <LinkArrow textLink="Contact" />
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        <BurgerMenu />
                    </div>
                </div>
            </StyledHeaderBody>
            <hr />
        </div>
    );
};

export default HeaderContainer;
