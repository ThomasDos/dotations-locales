import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const DividerContainer = styled(Divider)`
    margin-bottom: 0 !important;
    margin-top: 0 !important;
`;

const CustomSpanContainer = styled.span`
    color: var(--blue-france-sun-113-625);
    font-family: Marianne;
    font-weight: 300;
`;

const MenuItemCustom = ({
    handleClose,
    text,
    icon,
}: {
    handleClose: () => void;
    text: string;
    icon: string;
}) => {
    return (
        <MenuItem onClick={handleClose}>
            <div className="flex text-sm ">
                <CustomSpanContainer>{text}</CustomSpanContainer>
                <div className="ml-2 ">
                    <Image
                        src={`/icons/${icon}.svg`}
                        width="16px"
                        height="16px"
                        alt="icone exporter"
                    />
                </div>
            </div>
        </MenuItem>
    );
};

const DropdownMenuDownload = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex text-sm items-center cursor-pointer">
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={
                    <Image
                        src="/icons/file-download.svg"
                        width="16px"
                        height="16px"
                        alt="icone exporter"
                    />
                }
            >
                <CustomSpanContainer>Exporter</CustomSpanContainer>
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
                <div className="pt-1">
                    <MenuItemCustom
                        handleClose={handleClose}
                        text="Fichier csv"
                        icon="file-csv"
                    />
                </div>
                <DividerContainer
                    sx={{ borderBottomWidth: 0 }}
                    variant="middle"
                />
                <MenuItemCustom
                    handleClose={handleClose}
                    text="Fichier xls"
                    icon="file-xls"
                />
                <DividerContainer
                    sx={{ borderBottomWidth: 0 }}
                    variant="middle"
                />
                <MenuItemCustom
                    handleClose={handleClose}
                    text="Fichier pdf"
                    icon="file-pdf"
                />
            </Menu>
        </div>
    );
};

export default DropdownMenuDownload;
