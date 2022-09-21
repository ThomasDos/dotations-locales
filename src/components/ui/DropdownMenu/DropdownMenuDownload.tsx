import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const StyledDivider = styled(Divider)`
    margin: 0 !important;
`;

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
        <StyledMenuItem onClick={handleClose}>
            <div className="flex text-sm my-2 w-44 justify-between items-center">
                <StyledCustomSpan>{text}</StyledCustomSpan>
                <div className="ml-2">
                    <Image
                        src={`/icons/file-download.svg`}
                        width="16px"
                        height="16px"
                        alt="icone exporter"
                        layout="fixed"
                    />
                </div>
            </div>
        </StyledMenuItem>
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
                startIcon={
                    <div className="flex items-center">
                        <Image
                            src="/icons/dropdown-download.svg"
                            width="24px"
                            height="24px"
                            alt="icone exporter"
                            layout="fixed"
                        />
                    </div>
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
                    <MenuItemCustom
                        handleClose={handleClose}
                        text="Fichier csv"
                    />
                    <StyledDivider
                        sx={{ borderBottomWidth: 0 }}
                        variant="middle"
                    />
                    <MenuItemCustom
                        handleClose={handleClose}
                        text="Fichier xls"
                    />
                    <StyledDivider
                        sx={{ borderBottomWidth: 0 }}
                        variant="middle"
                    />
                    <MenuItemCustom
                        handleClose={handleClose}
                        text="Fichier pdf"
                    />
                </div>
            </Menu>
        </div>
    );
};

export default DropdownMenuDownload;
