import {
    Header,
    HeaderBody,
    Logo,
    Service,
    Tool,
    ToolItem,
    ToolItemGroup,
} from "@dataesr/react-dsfr";

import HorizontalSeparator from "./HorizontalSeparator";
import LinkArrow from "./LinkArrow";

const HeaderContainer = () => {
    return (
        <Header closeButtonLabel="Close it!">
            <HeaderBody>
                <Logo splitCharacter={10}>RÉPUBLIQUE FRANÇAISE</Logo>
                <Service
                    title="Dotations Locales"
                    description="Tout savoir sur les dotations d'état de votre collectivité"
                />
                <Tool>
                    <ToolItemGroup>
                        <ToolItem link="/">
                            <LinkArrow textLink="Notre mission" />
                        </ToolItem>
                        <HorizontalSeparator />
                        <ToolItem link="/">
                            <LinkArrow textLink="Contact" />
                        </ToolItem>
                    </ToolItemGroup>
                </Tool>
            </HeaderBody>
        </Header>
    );
};

export default HeaderContainer;
