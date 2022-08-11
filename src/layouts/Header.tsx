import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import HorizontalSeparator from "./HorizontalSeparator";
import LinkArrow from "./LinkArrow";

const HeaderBodyContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 120px;
`;

const HeaderContainer = () => {
    return (
        <div>
            <HeaderBodyContainer className="w-full flex justify-between">
                <div className="flex">
                    <div>
                        <Link href="/">
                            <div>
                                <Image
                                    src="/icons/marianne-text-header.svg"
                                    height="90px"
                                    width="88px"
                                    layout="fixed"
                                    alt="Logo de la marianne qui redirige vers l'accueil"
                                    className="cursor-pointer"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10 py-5">
                        <h6 className="p-0 m-0">Dotations Locales</h6>
                        <span>
                            Tout savoir sur les dotations d&apos;état de votre
                            collectivité
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex ml-8 py-5">
                        <div>
                            <LinkArrow textLink="Notre mission" />
                        </div>
                        <HorizontalSeparator />
                        <div>
                            <LinkArrow textLink="Contact" />
                        </div>
                    </div>
                </div>
            </HeaderBodyContainer>
            <hr />
        </div>
    );
};

export default HeaderContainer;
