import { Badge } from "@dataesr/react-dsfr";
import useResize from "hooks/useResize";
import Link from "next/link";
import styled from "styled-components";

const StyledContainer = styled.div`
    background: #dbf4e3;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 8px;

    @media (min-width: 900px) {
        padding: 20px 0;
    }
`;

export default function HomeNewsBanner() {
    const { windowWidth } = useResize();
    return (
        <StyledContainer>
            <Badge text="NOUVEAU" type="info" isSmall={windowWidth < 768} />
            <span className="ml-2 text-color-primary font-bold md:text-base text-sm">
                Découvrez vos critères 2023 !{" "}
                <Link
                    href="http://www.dotations-dgcl.interieur.gouv.fr/consultation/criteres_repartition.php"
                    target="_"
                >
                    Cliquer ici pour accéder à la source DGCL.
                </Link>
            </span>
        </StyledContainer>
    );
}
