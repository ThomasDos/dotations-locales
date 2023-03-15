import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ImageFixed from "components/ui/ImageFixed";
import { FICHIERS_DISPONIBLES } from "constants/fichiersDisponiblesMap";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Headers } from "react-csv/components/CommonPropTypes";
import { useSelector } from "react-redux";
import fetchAndDownloadFichiersData from "services/fetchAndDownloadFichiersData";
import { matomoTrackEvent } from "services/matomo";
import {
    selectEntitiesDenomination,
    selectEntityDenomination,
    selectIsCommune,
    selectIsDepartement,
    selectIsEPCI,
} from "store/appSettings.slice";
import { selectInitialCurrentYear } from "store/initialEntity.slice";
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
}

const DropdownMenuDownload = ({
    dataCSV,
    headers,
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
    const initialCurrentYear = useSelector(selectInitialCurrentYear);

    const isCommune = useSelector(selectIsCommune);
    const isDepartement = useSelector(selectIsDepartement);
    const isEPCI = useSelector(selectIsEPCI);

    const entityDenomination = useSelector(selectEntityDenomination);
    const entitiesDenomination = useSelector(selectEntitiesDenomination);

    const textMenuItemEntity = `Télécharger ${
        isCommune ? "ma" : "mon"
    } ${entityDenomination} ${currentYear} (csv)`;

    const textMenuItemEntities = `Télécharger ${
        isCommune ? "toutes les" : "tous les"
    } ${entitiesDenomination} ${initialCurrentYear} (csv)`;

    const handleDownloadFichier = () => {
        const fichier = () => {
            if (isCommune) {
                return "Répartition des critères des communes en 2022";
            }
            if (isDepartement) {
                return "Répartition des critères des départements en 2022";
            }
            if (isEPCI) {
                return "Répartition des critères des intercommunalités en 2022";
            }
        };

        toastPromise(
            fetchAndDownloadFichiersData(
                fichier() as keyof typeof FICHIERS_DISPONIBLES
            ),
            {
                loading:
                    "Préparation du fichier, merci de patienter jusqu'au téléchargement...",
                success: "Fichier téléchargé",
                error: "Une erreur est survenue, merci de réessayer",
            }
        );
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
                <MenuItemCustom
                    handleClose={handleClose}
                    text={textMenuItemEntities}
                    handleClick={handleDownloadFichier}
                />
            </Menu>
        </div>
    );
};

export default DropdownMenuDownload;
