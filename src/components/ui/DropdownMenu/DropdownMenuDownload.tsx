import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ImageFixed from "components/ui/ImageFixed";
import { InitEntityFichiers } from "models/init/init.interface";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Headers } from "react-csv/components/CommonPropTypes";
import { useSelector } from "react-redux";
import fetchAndDownloadFichiersData from "services/fetchAndDownloadFichiersData";
import { matomoTrackEvent } from "services/matomo";
import {
    selectEntityDenomination,
    selectIsCommune,
} from "store/appSettings.slice";
import { selectCurrentYear } from "store/simulationEntity.slice";
import styled from "styled-components";
import { toastPromise } from "utils/customToasts";

const StyledCustomSpan = styled.span`
    color: var(--blue-france-sun-113-625);
    font-family: Marianne;
    font-weight: 300;
`;

interface MenuItemCustomProps {
    handleClose: () => void;
    text: string;
    handleClick?: () => void;
}

const MenuItemCustom = ({
    handleClose,
    text,
    handleClick,
}: MenuItemCustomProps) => {
    return (
        <MenuItem
            onClick={() => {
                matomoTrackEvent(["Fonction", `Exporter ${text}`]);
                handleClose();
                handleClick?.();
            }}
        >
            <div className="flex text-sm my-2 w-44 justify-between items-center">
                <StyledCustomSpan>{text}</StyledCustomSpan>
                <ImageFixed
                    src={`/icons/file-download.svg`}
                    width={16}
                    height={16}
                    alt="icone pour exporter"
                    className="ml-2"
                />
            </div>
        </MenuItem>
    );
};

interface DropdownMenuDownloadProps {
    dataCSV: {}[] | [][];
    headers: Headers;
    fichiers?: InitEntityFichiers | null;
    fichiersEntity?: string | null;
}

const DropdownMenuDownload = ({
    dataCSV,
    headers,
    fichiers,
    fichiersEntity,
}: DropdownMenuDownloadProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const hasDataCSV = !!dataCSV?.length;
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        matomoTrackEvent(["Fonction", "Exporter"]);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const currentYear = useSelector(selectCurrentYear);

    const isCommune = useSelector(selectIsCommune);

    const entityDenomination = useSelector(selectEntityDenomination);

    const textMenuItemEntity = `Télécharger ${
        isCommune ? "ma" : "mon"
    } ${entityDenomination} ${currentYear} ${
        fichiersEntity ? `- ${fichiersEntity}` : ""
    } (csv)`;

    const handleDownloadFichier = (fichier: string) => {
        toastPromise(fetchAndDownloadFichiersData(fichier), {
            loading:
                "Préparation du fichier, merci de patienter jusqu'au téléchargement...",
            success: "Fichier téléchargé",
            error: "Une erreur est survenue, merci de réessayer",
        });
    };

    if (!dataCSV?.length) return null;

    return (
        <div className="flex text-sm items-center cursor-pointer">
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                startIcon={
                    <ImageFixed
                        src="/icons/dropdown-download.svg"
                        width={24}
                        height={24}
                        alt="icone pour exporter"
                    />
                }
            >
                <StyledCustomSpan>Télécharger</StyledCustomSpan>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                PaperProps={{ sx: { width: isCommune ? "360px" : "400px" } }}
            >
                <CSVLink
                    data={dataCSV}
                    download={`Dotations_Locales_${entityDenomination}_${currentYear}`}
                    hidden={!hasDataCSV}
                    headers={headers}
                >
                    <MenuItemCustom
                        handleClose={handleClose}
                        text={textMenuItemEntity}
                    />
                </CSVLink>
                {fichiers?.nationalCriteres && (
                    <MenuItemCustom
                        handleClose={handleClose}
                        text={fichiers?.nationalCriteres.label}
                        handleClick={() =>
                            handleDownloadFichier(
                                fichiers?.nationalCriteres?.nomFichier as string
                            )
                        }
                    />
                )}

                {fichiers?.nationalMontants && (
                    <MenuItemCustom
                        handleClose={handleClose}
                        text={fichiers?.nationalMontants.label}
                        handleClick={() =>
                            handleDownloadFichier(
                                fichiers?.nationalMontants?.nomFichier as string
                            )
                        }
                    />
                )}
            </Menu>
        </div>
    );
};

export default DropdownMenuDownload;
