import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ImageFixed from "components/ui/ImageFixed";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Headers } from "react-csv/components/CommonPropTypes";
import { matomoTrackEvent } from "services/matomo";
import styled from "styled-components";

const StyledCustomSpan = styled.span`
    color: var(--blue-france-sun-113-625);
    font-family: Marianne;
    font-weight: 300;
`;

const StyledMenuItem = styled(MenuItem)`
    padding: 0 !important;
`;

const MenuItemCustom = ({
    handleClose,
    text,
}: {
    handleClose: () => void;
    text: string;
}) => {
    return (
        <StyledMenuItem
            onClick={() => {
                matomoTrackEvent(["Fonction", `Exporter ${text}`]);
                handleClose();
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
        </StyledMenuItem>
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
                <StyledCustomSpan>Exporter</StyledCustomSpan>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <div className="px-6 py-4">
                    <CSVLink
                        data={dataCSV}
                        download={"Dotations_Locales"}
                        hidden={!hasDataCSV}
                        headers={headers}
                    >
                        <MenuItemCustom
                            handleClose={handleClose}
                            text="Fichier csv"
                        />
                    </CSVLink>
                </div>
            </Menu>
        </div>
    );
};

export default DropdownMenuDownload;
