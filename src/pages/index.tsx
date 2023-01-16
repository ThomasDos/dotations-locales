import { HomeRowImageText } from "components/home";
import { SearchInput } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import useHomeInit from "hooks/useHomeInit";
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

const Home: NextPage = () => {
    useHomeInit();

    return (
        <>
            <Head>
                <title>Dotations Locales</title>
            </Head>
            <div className="flex flex-col items-center px-2 md:px-0">
                <div className="pt-5 md:pt-20 text-center">
                    <h1 className="p-0 m-0">
                        Évaluez le montant des dotations locales <br />
                        de votre collectivité territoriale
                    </h1>
                </div>
                <div className="my-6 text-center px-10 md:px-0">
                    <span className="text-lg md:font-bold">
                        Accédez facilement aux données de la dotation générale
                        de fonctionnement (DGF)
                        <br /> pour construire et anticiper le budget de votre
                        collectivité.
                    </span>
                </div>
                <SearchInput
                    placeholder={`${
                        window.innerWidth > 480 ? "Nom de la c" : "C"
                    }ollectivité ou code insee`}
                    textIcon="Rechercher"
                />
                <div className="md:mx-60 mt-10 md:mt-20 text-center md:text-left">
                    <HomeRowImageText
                        priority
                        src="/images/landing-1.png"
                        imageHeight={444}
                        imageWidth={444}
                        imageAlt="first row image"
                        titleContent="Améliorons la connaissance sur les dotations d'état"
                    >
                        Le Service
                        <strong> Dotations Locales</strong> a pour objectif de
                        vous aider et d’améliorer votre connaissance sur les
                        dotations de votre collectivité afin de vous permettre
                        d’anticiper et de construire sereinement votre budget
                        local.
                    </HomeRowImageText>

                    <HomeRowImageText
                        src="/images/landing-2.png"
                        reverse
                        imageHeight={444}
                        imageWidth={444}
                        imageAlt="second row image"
                        titleContent="Les données utiles pour construire votre budget"
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
                        src="/images/landing-3.png"
                        imageHeight={320}
                        imageWidth={320}
                        imageAlt="third row image"
                        titleContent="Simuler, comparer et analyser l’évolution de vos dotations locales"
                    >
                        Un outil pratique pour suivre l’évolution des montants,
                        comparer et analyser les critères et les données qui ont
                        un impact fort sur les fonds qui vous sont attribués.
                    </HomeRowImageText>

                    <HomeRowImageText
                        src="/images/landing-4.png"
                        reverse
                        imageHeight={256}
                        imageWidth={256}
                        imageAlt="fourth row image"
                        titleContent="Sur la base du moteur de calcul OpenFisca"
                    >
                        <strong>Dotations Locales</strong> s’appuie sur{" "}
                        <strong>OpenFisca</strong>, un moteur de calcul libre,
                        collaboratif et transparent qui permet de simuler
                        l&lsquo;impact de réformes sur les dotations des
                        collectivités.
                    </HomeRowImageText>

                    <HomeRowImageText
                        src="/images/landing-5.png"
                        imageHeight={256}
                        imageWidth={256}
                        imageAlt="fifth row image"
                        titleContent="Des données libres et partagées en Open Data"
                    >
                        L’ensemble des données de votre collectivité sont
                        collectées automatiquement à partir des plateformes
                        publiques
                        <strong> Data.gouv.fr.</strong>
                    </HomeRowImageText>
                </div>

                <MainBottom>
                    <MainBottomBody>
                        <div className="md:mr-14 mb-14 md:mb-0 flex flex-col items-center">
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
                        </div>

                        <div>
                            <div className="text-2xl font-bold mb-4">
                                Service soutenu par France relance
                            </div>
                            <span>
                                Dotations locales est née du constat d’une
                                évolution des concours financiers aux budgets
                                des territoires et de l’absence d’outils
                                partagés permettant d’en anticiper les effets.
                                Or, les données ouvertes sur les territoires
                                ainsi que la naissance d’un modèle open source
                                des règles de calcul des dotations rendent cela
                                possible.
                            </span>
                        </div>
                    </MainBottomBody>
                </MainBottom>
            </div>
        </>
    );
};

export default Home;
