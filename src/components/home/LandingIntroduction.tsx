import Link from "next/link";
import { Badge } from "@dataesr/react-dsfr";
import { ImageFixed } from "components/ui";
import styled from "styled-components";

const StyledLandingIntroductionContainer = styled.div`
    border: 2px solid var(--yellow-tournesol-950-100);
`;

const LandingIntroduction = () => {
    return (
        <StyledLandingIntroductionContainer className="flex py-6 px-6 sm:px-8 items-center mx-auto mt-10 max-w-4xl">
            <div>
                <div className="mb-2.5">
                    <Badge type="new" hasIcon text="IMPORTANT" />
                </div>

                <div className="sm:mr-8 text-justify">
                    Pour rappel, seule la notification officielle émise par la{" "}
                    <Link
                        href="http://www.dotations-dgcl.interieur.gouv.fr/consultation/dotations_en_ligne.php"
                        rel="noopener noreferrer"
                        target="_">
                            Direction Générale des Collectivités Locales (DGCL)
                    </Link> fait foi. Notre plateforme vous en facilite l{"'"}accès et la compréhension.
                </div>
            </div>
            <ImageFixed
                className="hidden sm:flex"
                src="/images/incubateur-territoires.png"
                width={120}
                height={68}
                alt="logo de l'incubateur des territoires ANCT"
            />
        </StyledLandingIntroductionContainer>
    );
};

export default LandingIntroduction;
