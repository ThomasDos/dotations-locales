import { SwipeableDrawer } from "@mui/material";
import ImageFixed from "components/ui/ImageFixed";
import useResize from "hooks/useResize";
import { Dotation, Dotations, Links } from "models/entity/entity.interface";
import {
    InitEntityFichiers,
    InitNationalFichiers,
} from "models/init/init.interface";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import fetchAndDownloadFichiersData from "services/fetchAndDownloadFichiersData";
import { matomoTrackEvent } from "services/matomo";
import {
    selectDerniereMajDonnees,
    selectIsCommune,
    selectIsDepartement,
    selectIsEPCI,
    selectSourcesDonneesDotationWithDotation,
} from "store/appSettings.slice";
import { selectInitialDotations } from "store/initialEntity.slice";
import { selectDotationDGF } from "store/simulationEntity.slice";
import styled from "styled-components";
import { toastPromise } from "utils/customToasts";
import formatDotationLinks from "utils/formatDotationLinks";
import DrawerCrumbBreads from "./DrawerCrumbBreads";
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

const StyledSectionTitle = styled.p`
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 4px;
    color: var(--grey-425);
`;

const StyledSectionRow = styled.div`
    color: var(--blue-france-113);
    margin: 4px 0;
    cursor: pointer;
`;

function DownloadFileRow({ label }: { label: string }) {
    return (
        <div
            onClick={() => {
                matomoTrackEvent(["Fonction", `Télécharger > Info : ${label}`]);
            }}
        >
            <div className="flex text-sm my-2 items-center hover:underline">
                <ImageFixed
                    src="/icons/file-download-empty.svg"
                    width={24}
                    height={24}
                    alt="icone pour exporter"
                    className="mr-2"
                />
                <span>{label}</span>
            </div>
        </div>
    );
}

export default function InfoDrawer({
    showInfoDrawer,
    setShowInfoDrawer,
    dotation,
}: InfoDrawerProps) {
    const [currentDotation, setCurrentDotation] = useState<Dotation>(dotation);
    const dotations = useSelector(selectInitialDotations);
    const dotationDGF = useSelector(selectDotationDGF);
    const sourcesDonneesDotationWithDotation = useSelector(
        selectSourcesDonneesDotationWithDotation(currentDotation.key)
    );
    const isCommune = useSelector(selectIsCommune);
    const isDepartement = useSelector(selectIsDepartement);
    const isEPCI = useSelector(selectIsEPCI);
    const derniereMajDonnees = useSelector(selectDerniereMajDonnees);

    const fichiers = sourcesDonneesDotationWithDotation?.fichiers;
    const liensExternes = sourcesDonneesDotationWithDotation?.liensExternes;

    const fichiersIsEmpty = !Object.values(fichiers ?? {})?.find(Boolean);

    const handleClose = () => {
        setShowInfoDrawer(false);
        setTimeout(() => {
            setCurrentDotation(dotation);
        }, 1000);
    };

    const handleChangeInfoDotation = (dotationKey: string) => {
        if (dotationKey === "dotationGlobaleFonctionnement") {
            return setCurrentDotation(dotationDGF);
        }
        if (currentDotation.key === "dotationSolidariteRurale") {
            const sousDotation = currentDotation.sousDotations?.find(
                sousDotation => Object.keys(sousDotation)[0] === dotationKey
            ) as Dotations;
            return setCurrentDotation(
                sousDotation[Object.keys(sousDotation)[0]] satisfies Dotation
            );
        }

        setCurrentDotation(dotations[dotationKey]);
    };

    const handleDownloadFichier = (fichier: string) => {
        toastPromise(fetchAndDownloadFichiersData(fichier), {
            loading:
                "Préparation du fichier, merci de patienter jusqu'au téléchargement...",
            success: "Fichier téléchargé",
            error: "Une erreur est survenue, merci de réessayer",
        });
    };

    const { title, info, links } = currentDotation;
    const linksFormatted: Links = formatDotationLinks({
        links,
        dotation: currentDotation,
        isCommune,
        isDepartement,
        isEPCI,
    });
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
            <StyledDrawerHeader>
                <div
                    className="p-2 cursor-pointer bg-grey-975"
                    onClick={handleClose}
                >
                    <ImageFixed
                        src="/icons/cross-grey-diagonal.svg"
                        width={16}
                        height={16}
                        alt="Une croix pour fermer la modal"
                    />
                </div>
                <DrawerCrumbBreads
                    backLinks={currentDotation.backLinks}
                    handleChangeInfoDotation={handleChangeInfoDotation}
                    currentDotationLabel={currentDotation.label}
                />
            </StyledDrawerHeader>
            <StyledDrawerBody>
                <div className="mb-10">
                    <StyledDotationTitle>{title}</StyledDotationTitle>

                    <div className="text-sm flex items-center">
                        <div className="mr-2">
                            Dernière mise à jour :{" "}
                            {new Date(
                                derniereMajDonnees as string
                            ).toLocaleDateString()}
                        </div>
                    </div>
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

                <DrawerLinks
                    links={linksFormatted}
                    handleChangeInfoDotation={handleChangeInfoDotation}
                />

                {!fichiersIsEmpty && (
                    <>
                        <StyledSectionTitle>A télécharger</StyledSectionTitle>
                        {Object.values(fichiers as InitEntityFichiers).map(
                            (fichier: InitNationalFichiers) => {
                                if (!fichier) return null;
                                const { label, nomFichier } = fichier;
                                return (
                                    <StyledSectionRow
                                        key={label}
                                        onClick={() =>
                                            handleDownloadFichier(nomFichier)
                                        }
                                    >
                                        <DownloadFileRow label={label} />
                                    </StyledSectionRow>
                                );
                            }
                        )}
                    </>
                )}

                {!!liensExternes?.length && (
                    <>
                        <StyledSectionTitle>
                            Pour aller plus loin
                        </StyledSectionTitle>
                        <div className="flex flex-col">
                            {liensExternes.map(({ label, url }) => (
                                <StyledSectionRow key={label}>
                                    <Link href={url} target="_">
                                        {label}
                                    </Link>
                                </StyledSectionRow>
                            ))}
                        </div>
                    </>
                )}
            </StyledDrawerBody>
        </SwipeableDrawer>
    );
}
