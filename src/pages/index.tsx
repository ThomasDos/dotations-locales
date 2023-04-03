import HomeRowGuideDownload from "components/home/HomeRowGuideDownload";
import HomeRowImageText from "components/home/HomeRowImageText";
import LandingIntroduction from "components/home/LandingIntroduction";
import { SearchInput } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import useHomeInit from "hooks/useHomeInit";
import useResize from "hooks/useResize";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const MainBottom = styled.div`
    background-color: var(--green-emeraude-975);
    margin-bottom: 0.2rem;
    width: 100%;
    padding: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        padding: 5rem 10rem;
    }
    @media (min-width: 1024px) {
        padding: 5rem 15rem;
    }
`;
const MainBottomBody = styled.div`
    background-color: var(--grey-1000);
    padding: 32px;
    text-align: center;
    width: 100vw;
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (min-width: 940px) {
        padding: 50px 40px;
        text-align: left;
    }
`;

const StyledBottomLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.5rem;

    @media (min-width: 768px) {
        margin-right: 3.5rem;
        margin-bottom: 0;
    }
`;

const Home: NextPage = () => {
    useHomeInit();
    const { windowWidth } = useResize();

    return (
        <>
            <Head>
                <title>Dotations Locales</title>
            </Head>
            <div className="flex flex-col items-center px-2 md:px-0">
                <div className="pt-5 md:pt-20 text-center">
                    <h1 className="p-0 m-0">
                        Consultez et analysez les dotations locales de <br />
                        votre collectivité territoriale
                    </h1>
                </div>
                <div className="my-6 text-center px-10 md:px-0">
                    <span className="text-lg md:font-bold">
                        Recherchez votre commune, intercommunalité ou
                        département
                    </span>
                </div>
                <SearchInput
                    placeholder={`${
                        windowWidth > 480 ? "Recherche par n" : "N"
                    }om, code insee ou code postal`}
                    textIcon="Rechercher"
                />

                <div className="md:mx-60 text-center md:text-left">
                    <LandingIntroduction />
                    <HomeRowGuideDownload />

                    <HomeRowImageText
                        priority
                        src="/images/landing-euro.png"
                        imageHeight={444}
                        imageWidth={444}
                        imageAlt="first row image"
                        titleContent="Améliorons la connaissance sur les dotations d'État"
                    >
                        Le Service
                        <strong> Dotations Locales</strong> a pour objectif de
                        rendre accessible et de faciliter l&apos;exploitation
                        des montants attribués au titre de la dotation globale
                        de fonctionnement de votre collectivité.
                    </HomeRowImageText>

                    <HomeRowImageText
                        src="/images/landing-dotations.png"
                        reverse
                        imageHeight={444}
                        imageWidth={444}
                        imageAlt="second row image"
                        titleContent="Les données utiles pour comprendre votre budget"
                    >
                        Accédez rapidement aux informations et aux montants dont
                        vous avez besoin pour établir votre budget. <br />{" "}
                        <br />
                        <strong>
                            Exportez et utilisez les données comme vous le
                            souhaitez !
                        </strong>
                    </HomeRowImageText>

                    <HomeRowImageText
                        src="/images/landing-chart.png"
                        imageHeight={320}
                        imageWidth={320}
                        imageAlt="third row image"
                        titleContent="Comparez et analysez l'évolution de vos dotations"
                    >
                        Un outil pratique pour suivre l&apos;évolution des
                        montants, comparer et analyser les critères et les
                        données qui ont un impact fort sur les fonds qui vous
                        sont attribués.
                    </HomeRowImageText>

                    <HomeRowImageText
                        reverse
                        src="/images/landing-open-fisca.png"
                        imageHeight={256}
                        imageWidth={256}
                        imageAlt="fourth row image"
                        titleContent="Sur la base du moteur de calcul OpenFisca"
                        badgeText="en beta"
                        badgeType="new"
                        badgeHasIcon
                    >
                        <strong>Dotations Locales</strong> s&apos;appuie sur{" "}
                        <strong>OpenFisca</strong>, un moteur de calcul libre,
                        collaboratif et transparent qui permet de simuler
                        l&lsquo;impact de réformes sur les dotations des
                        collectivités.
                    </HomeRowImageText>

                    <HomeRowImageText
                        src="/images/landing-data-gouv.png"
                        imageHeight={256}
                        imageWidth={256}
                        imageAlt="fifth row image"
                        titleContent="Des données libres et partagées en Open Data"
                    >
                        L&apos;ensemble des données de votre collectivité sont
                        collectées automatiquement à partir des plateformes
                        publiques
                        <strong> Data.gouv.fr.</strong>
                    </HomeRowImageText>
                </div>

                <MainBottom>
                    <MainBottomBody>
                        <StyledBottomLogoContainer>
                            <ImageFixed
                                className="mb-4"
                                src="/images/france-relance.png"
                                height={116}
                                width={116}
                                alt="icone france relance"
                            />
                            <ImageFixed
                                src="/images/financé-ue.png"
                                height={41.5}
                                width={179}
                                alt="icone union européenne"
                            />
                        </StyledBottomLogoContainer>

                        <div>
                            <div className="text-2xl font-bold mb-4">
                                Service soutenu par le plan France Relance
                            </div>
                            <span>
                                Dotations locales est née du constat d&apos;une
                                évolution des concours financiers aux budgets
                                des territoires et de l&apos;absence
                                d&apos;outils partagés permettant d&apos;en
                                anticiper les effets. Or, les données ouvertes
                                sur les territoires ainsi que la naissance
                                d&apos;un modèle open source des règles de
                                calcul des dotations rendent cela possible.
                            </span>
                        </div>
                    </MainBottomBody>
                </MainBottom>
            </div>
        </>
    );
};

export default Home;
