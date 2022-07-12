import { Text, Title } from "@dataesr/react-dsfr";
import HomeRowImageText from "components/HomeRowImageText";
import SearchInput from "components/SearchInput";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
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
    const [search, setSearch] = useState<string>("");
    return (
        <div className="flex flex-col items-center">
            <div className="pt-20 pb-6">
                <Title as="h1">Rechercher votre collectivité</Title>
            </div>
            <SearchInput search={search} setSearch={setSearch} />
            <div className="mt-6 mb-20">
                <Text size="md">
                    Egestas magna eu, condimentum amet. Vitae odio mauris
                    suspendisse duis vestibulum. Nulla.
                </Text>
            </div>
            <div className="mx-60">
                <HomeRowImageText
                    imageHeight="444px"
                    imageWidth="444px"
                    imageAlt="first row image"
                    titleContent="Fermentum cum sodales cras viverra sit habitant
                            mollis."
                    bodyContent="  Corps de texte réservé aux usages éditoriaux (type :
                            actualités, blog) afin de permettre un plus grand
                            confort de lecture."
                />

                <HomeRowImageText
                    reverse
                    imageHeight="236px"
                    imageWidth="236px"
                    imageAlt="second row image"
                    titleContent="Egestas in viverra in nec."
                    bodyContent="Enim, cras habitant felis et. Ut nibh in tincidunt
                            maecenas lorem rhoncus. Tristique in semper laoreet
                            massa egestas. Facilisi aliquam viverra sollicitudin
                            commodo mauris leo id maecenas interdum."
                />

                <HomeRowImageText
                    imageHeight="336px"
                    imageWidth="336px"
                    imageAlt="third row image"
                    titleContent="Fermentum cum sodales cras viverra sit habitant
                            mollis."
                    bodyContent="  Corps de texte réservé aux usages éditoriaux (type :
                            actualités, blog) afin de permettre un plus grand
                            confort de lecture."
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
                            Fermentum cum sodales cras viverra sit habitant
                            mollis.
                        </div>
                        <span>
                            Corps de texte réservé aux usages éditoriaux (type :
                            actualités, blog) afin de permettre un plus grand
                            confort de lecture.
                        </span>
                    </div>
                </MainBottomBody>
            </MainBottom>
        </div>
    );
};

export default Home;
