import HomeRowImageText from "components/HomeRowImageText";
import SearchInput from "components/SearchInput";
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
                    imageHeight="444px"
                    imageWidth="444px"
                    imageAlt="first row image"
                    titleContent="Améliorons la connaissance sur les dotations."
                    bodyContent="Le Service Dotations Locales a pour objectif de vous aider et d’améliorer votre connaissance sur les dotations de votre collectivité afin de vous permettre d’anticiper et de construire sereinement votre budget local."
                />

                <HomeRowImageText
                    reverse
                    imageHeight="236px"
                    imageWidth="236px"
                    imageAlt="second row image"
                    titleContent="Toutes les données utiles pour construire votre budget."
                    bodyContent="Accédez rapidement aux informations et aux montants utiles pour constrir votre budget primitif. Exportez et exploitez les données comme bon vous semble !"
                />

                <HomeRowImageText
                    imageHeight="336px"
                    imageWidth="336px"
                    imageAlt="third row image"
                    titleContent="Simulez, comparez et analysez l’évolution de vos dotations locales."
                    bodyContent="Corps de texte réservé aux usages éditoriaux (type :
                            actualités, blog) afin de permettre un plus grand
                            confort de lecture."
                />

                <HomeRowImageText
                    reverse
                    imageHeight="236px"
                    imageWidth="236px"
                    imageAlt="fourth row image"
                    titleContent="Sur la base du moteur de calcul OpenFisca."
                    bodyContent="Accédez rapidement aux informations et aux montants utiles pour constrir votre budget primitif. Exportez et exploitez les données comme bon vous semble !"
                />

                <HomeRowImageText
                    reverse
                    imageHeight="236px"
                    imageWidth="236px"
                    imageAlt="fifth row image"
                    titleContent="Open data."
                    bodyContent="Accédez rapidement aux informations et aux montants utiles pour constrir votre budget primitif. Exportez et exploitez les données comme bon vous semble !"
                />
            </div>

            <MainBottom className="w-full py-20 px-60 flex justify-center items-center">
                <MainBottomBody className="w-screen max-w-4xl flex justify-center items-center">
                    <div className="mr-14">
                        <Image
                            src="/icons/france-relance.svg"
                            height="160px"
                            width="160px"
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
