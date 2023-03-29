import { BreadCrumbsTwoLinks } from "components/ui";
import styled from "styled-components";

const TitleSubHeader = styled.span`
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    padding: 16px 0;
    color: var(--blue-france-113);
`;

export default function SubHeaderCgu() {
    return (
        <div className="py-8 w-8/12 mx-auto flex flex-col">
            <BreadCrumbsTwoLinks
                firstLink="Accueil"
                secondLink="Politique de confidentialité"
            />
            <TitleSubHeader>Politique de confidentialité</TitleSubHeader>
            <span>Dernière mise à jour : 28 mars 2023</span>
        </div>
    );
}
