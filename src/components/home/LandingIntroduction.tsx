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
                    Les montants des dotations sont calculés sur la base de la{" "}
                    <b>loi de finances 2022</b> avec les{" "}
                    <b>critères de répartitions 2022</b>. Pour rappel, seule la
                    notification officielle de la DGF fait foi.
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
