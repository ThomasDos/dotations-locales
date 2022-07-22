import { HomeRowImageText, SearchInput } from "components/home";
import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const MainBottom = styled.div`
    background-color: var(--green-emeraude-975);
    margin-bottom: 0.2rem;
`;
const MainBottomBody = styled.div`
    background-color: var(--grey-1000);
    padding: 50px 40px;
`;

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="pt-20 text-center">
                <h1 className="p-0 m-0">
                    Évaluez le montant des dotations locales <br />
                    de votre collectivité territoriale
                </h1>
            </div>
            <div className="my-6 text-center">
                <span className="text-lg font-bold">
                    Accédez facilement aux données des dotations générales de
                    fonctionnement (DGF)
                    <br /> pour construire et anticiper le budget de votre
                    collectivité.
                </span>
            </div>
            <SearchInput />
            <div className="mx-60 mt-20">
                <HomeRowImageText
                    src="/images/landing-1.svg"
                    imageHeight="444px"
                    imageWidth="444px"
                    imageAlt="first row image"
                    titleContent="Améliorons la connaissance sur les dotations d'état"
                >
                    Le Service
                    <strong> Dotations Locales</strong> a pour objectif de vous
                    aider et d’améliorer votre connaissance sur les dotations de
                    votre collectivité afin de vous permettre d’anticiper et de
                    construire sereinement votre budget local.
                </HomeRowImageText>

                <HomeRowImageText
                    src="/images/landing-2.svg"
                    reverse
                    imageHeight="444px"
                    imageWidth="444px"
                    imageAlt="second row image"
                    titleContent="Les données utiles pour construire votre budget"
                >
                    Accédez rapidement aux informations et aux montants dont
                    vous avez besoin pour établir votre budget. <br /> <br />
                    <strong>
                        Exportez et utilisez les données comme vous le souhaitez
                        !
                    </strong>
                </HomeRowImageText>

                <HomeRowImageText
                    src="/images/landing-3.svg"
                    imageHeight="320px"
                    imageWidth="320px"
                    imageAlt="third row image"
                    titleContent="Simulez, comparez et analysez l’évolution de vos dotations locales"
                >
                    Un outil pratique pour suivre l’évolution des montants,
                    comparez et analysez les critères et les données qui ont un
                    impact fort sur les fonds qui vous sont attribués.
                </HomeRowImageText>

                <HomeRowImageText
                    src="/images/landing-4.svg"
                    reverse
                    imageHeight="256px"
                    imageWidth="256px"
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
                    src="/images/landing-5.svg"
                    imageHeight="256px"
                    imageWidth="256px"
                    imageAlt="fifth row image"
                    titleContent="Des données libres et partagées en Open Data"
                >
                    L’ensemble des données de votre collectivité sont collectées
                    automatiquement à partir des plateformes publiques
                    <strong>Data.gouv.fr.</strong>
                </HomeRowImageText>
            </div>

            <MainBottom className="w-full py-20 px-60 flex justify-center items-center">
                <MainBottomBody className="w-screen max-w-4xl flex justify-center items-center">
                    <div className="mr-14">
                        <Image
                            src="/icons/france-relance.svg"
                            height="116px"
                            width="116px"
                            alt="icone france relance"
                            layout="fixed"
                        />
                    </div>

                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Service soutenu par France relance
                        </div>
                        <span>
                            Dotations locales est née du constat d’une évolution
                            des concours financiers aux budgets des territoires
                            et de l’absence d’outils partagés permettant d’en
                            anticiper les effets. Or, les données ouvertes sur
                            les territoires ainsi que la naissance d’un modèle
                            open source des règles de calcul des dotations
                            rendent cela possible.
                        </span>
                    </div>
                </MainBottomBody>
            </MainBottom>
        </div>
    );
};

export default Home;
