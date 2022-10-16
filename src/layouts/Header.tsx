import { BurgerMenu } from "components/ui";
import Image from "next/image";
import Link from "next/link";
import { matomoTrackEvent } from "services/matomo";
import styled from "styled-components";

import HorizontalSeparator from "./HorizontalSeparator";
import LinkArrow from "./LinkArrow";

const StyledHeaderBody = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 12px;
    @media (min-width: 768px) {
        padding: 12px 120px;
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
                                <div className="hidden sm:block">
                                    <Image
                                        src="/images/marianne-text-header-lg.svg"
                                        height="90px"
                                        width="88px"
                                        layout="fixed"
                                        alt="Logo de la marianne qui redirige vers l'accueil"
                                        className="cursor-pointer"
                                    />
                                </div>
                                <div className="block sm:hidden">
                                    <Image
                                        src="/images/marianne-text-header-sm.svg"
                                        height="78px"
                                        width="174px"
                                        layout="fixed"
                                        alt="Logo de la marianne qui redirige vers l'accueil"
                                        className="cursor-pointer"
                                    />
                                </div>
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
                        <div>
                            <LinkArrow
                                textLink="Notre mission"
                                handleOnClick={() => {
                                    win.location =
                                        "https://beta.gouv.fr/startups/dotations-locales.html";
                                }}
                            />
                        </div>
                        <HorizontalSeparator />
                        <div>
                            <LinkArrow
                                textLink="Contact"
                                handleOnClick={() => {
                                    win.location =
                                        "mailto:contact-dotations-locales@anct.gouv.fr";
                                }}
                            />
                        </div>
                    </div>
                    <div className="block sm:hidden">
                        <BurgerMenu />
                    </div>
                </div>
            </StyledHeaderBody>
            <hr />
        </div>
    );
};

export default HeaderContainer;
