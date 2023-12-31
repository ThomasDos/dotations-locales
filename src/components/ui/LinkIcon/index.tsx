// import Link from "next/link";

import { Tooltip } from "@mui/material";
import ImageFixed from "components/ui/ImageFixed";
import { matomoTrackEvent } from "services/matomo";
import styled from "styled-components";

const StyledSpan = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const StyledLinkIcon = styled.div<{ disabled?: boolean }>`
    padding: 4px 12px 4px 8px;
    opacity: ${({ disabled }) => (disabled ? "50%" : "")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    @media (max-width: 900px) {
        padding: 2px 6px 2px 4px;
    }
`;

interface LinkIconProps {
    icon: string;
    text: string;
    disabled?: boolean;
    handleClick?: () => void;
}

const LinkIcon = ({ icon, text, handleClick, disabled }: LinkIconProps) => {
    return (
        <Tooltip
            title={disabled ? "En construction..." : ""}
            placement="top"
            arrow
            componentsProps={{
                arrow: {
                    sx: {
                        color: "#f5f5fe",
                    },
                },
                tooltip: {
                    sx: {
                        bgcolor: "#f5f5fe",
                        color: "#000091 ",
                    },
                },
            }}
        >
            <StyledLinkIcon
                className="flex items-center"
                onClick={() => {
                    if (disabled) return;
                    matomoTrackEvent(["Navigation", text]);
                    handleClick?.();
                }}
                disabled={disabled}
            >
                <ImageFixed
                    src={`/icons/${icon}.svg`}
                    width={16}
                    height={16}
                    alt={`icone ${text}`}
                />
                <StyledSpan className="text-sm ml-2">{text}</StyledSpan>
            </StyledLinkIcon>
        </Tooltip>
    );
};

export default LinkIcon;
