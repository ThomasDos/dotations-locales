import { Collapse, Divider } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

import { Divide as Burger } from "../Burger";

const StyledDivider = styled(Divider)`
    margin: 0 !important;
`;

const StyledSpanMenu = styled.span`
    color: var(--blue-france-113);
    font-size: 14px;
`;

const StyledSpanDropDown = styled.span`
    font-size: 14px;
    margin: 8px 0;
    color: var(--blue-france-113);
`;

const StyledDropDown = styled.div`
    background: var(--grey-1000);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    text-align: center;
`;

export default function BurgerMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const win: Window = window;
    return (
        <>
            <div className="flex flex-col items-center">
                <Burger
                    toggle={() => {
                        setShowMenu(!showMenu);
                    }}
                    aria-label="Ouvrir le menu pour acceder aux liens mission et contact"
                    toggled={showMenu}
                    size={24}
                    color="var(--blue-france-113)"
                />
                <StyledSpanMenu>Menu</StyledSpanMenu>
            </div>
            <Collapse in={showMenu}>
                <StyledDropDown className="absolute flex flex-col right-4 px-6 py-4">
                    <StyledSpanDropDown
                        onClick={() => {
                            win.location =
                                "https://beta.gouv.fr/startups/dotations-locales.html";
                        }}
                    >
                        Mission
                    </StyledSpanDropDown>
                    <StyledDivider
                        sx={{ borderBottomWidth: 0 }}
                        variant="middle"
                    />
                    <StyledSpanDropDown
                        onClick={() => {
                            win.location =
                                "mailto:contact-dotations-locales@anct.gouv.fr";
                        }}
                    >
                        Contact
                    </StyledSpanDropDown>
                </StyledDropDown>
            </Collapse>
        </>
    );
}
