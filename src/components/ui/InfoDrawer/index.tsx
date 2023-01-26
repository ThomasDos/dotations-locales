import { SwipeableDrawer } from "@mui/material";
import ImageFixed from "components/ui/ImageFixed";
import useResize from "hooks/useResize";
import { Dotation, Dotations } from "models/commune/commune.interface";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectInitialDotations } from "store/initialCommune.slice";
import styled from "styled-components";
import DrawerLinks from "./DrawerLinks";

interface InfoDrawerProps {
    showInfoDrawer: boolean;
    setShowInfoDrawer(show: boolean): void;
    dotation: Dotation;
}

const StyledDrawerHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0 15px 20px;
    background-color: var(--grey-975);
    cursor: pointer;
    @media (min-width: 720px) {
        padding: 30px 0 30px 40px;
    }
`;

const StyledDrawerBody = styled.div`
    padding: 18px 36px 36px;
    background-color: var(--grey-1000);
    @media (min-width: 720px) {
        padding: 18px 80px 36px;
    }
`;

const StyledDotationTitle = styled.div`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 8px;
`;

export default function InfoDrawer({
    showInfoDrawer,
    setShowInfoDrawer,
    dotation,
}: InfoDrawerProps) {
    const [currentDotation, setCurrentDotation] = useState<Dotation>(dotation);
    const dotations = useSelector(selectInitialDotations);

    const handleClose = () => {
        setShowInfoDrawer(false);
        setTimeout(() => {
            setCurrentDotation(dotation);
        }, 1000);
    };

    const handleChangeInfoDotation = (dotationKey: string) => {
        let newDotation: Dotation;
        if (currentDotation.key === "dotationSolidariteRurale") {
            const sousDotation = currentDotation.sousDotations?.find(
                sousDotation => Object.keys(sousDotation)[0] === dotationKey
            ) as Dotations;
            newDotation = sousDotation[
                Object.keys(sousDotation)[0]
            ] satisfies Dotation;
        } else {
            newDotation = dotations[dotationKey];
        }
        setCurrentDotation(newDotation);
    };

    const { title, info, links } = currentDotation;
    const { windowWidth } = useResize();

    const textFormatted = info?.split("<br>");

    return (
        <SwipeableDrawer
            PaperProps={{
                sx: {
                    width: windowWidth > 1024 ? "60vw" : "90vw",
                },
            }}
            anchor="right"
            open={showInfoDrawer}
            onClose={handleClose}
            onOpen={() => setShowInfoDrawer(true)}
        >
            <StyledDrawerHeader onClick={handleClose}>
                <ImageFixed
                    src="/icons/cross-blue.svg"
                    width={16}
                    height={16}
                    alt="Une croix pour fermer la modal"
                />
                <span className="text-sm text-color-primary">Fermer</span>
            </StyledDrawerHeader>
            <StyledDrawerBody>
                <div className="mb-10">
                    <StyledDotationTitle>{title}</StyledDotationTitle>
                    {/* 
                    TODO: décommenter quand on aura la date dernier MAJ
                    <div className="text-sm flex items-center">
                        <div className="mr-2">
                            Dernière mise à jour : 29 juillet 2022
                        </div>
                        <LabelText
                            text="DGCL"
                            backgroundColor="var(--blue-france-925)"
                            color="var(--blue-france-113)"
                        />
                    </div> */}
                </div>

                <div className="mb-10">{textFormatted?.[0]}</div>
                {textFormatted?.[1] && (
                    <div className="mb-10">{textFormatted[1]}</div>
                )}
                {/*
                TODO: Faire les collapse quand feature prête 
                */}
                {/* <div className="mb-10">
                        <InfoDrawerDropdown title="Conditions d'attribution" />
                        <InfoDrawerDropdown title="Conditions d’exclusion" />
                        <InfoDrawerDropdown title="Critères concernés" />
                        <InfoDrawerDropdown title="Formule de calcul" lastRow />
                    </div> */}

                {!!links?.length && (
                    <DrawerLinks
                        links={links}
                        handleChangeInfoDotation={handleChangeInfoDotation}
                    />
                )}

                {/* <div className="text-sm text-grey-mayback">
                    Pour aller plus loin
                </div> */}
            </StyledDrawerBody>
        </SwipeableDrawer>
    );
}
