// import Link from "next/link";

import Image from "next/image";
import styled from "styled-components";

const StyledSpan = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const StyledLinkIcon = styled.div<{ disabled?: boolean }>`
    padding: 4px 12px 4px 8px;
    opacity: ${({ disabled }) => (disabled ? "50%" : "")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

interface LinkIconProps {
    icon: string;
    text: string;
    disabled?: boolean;
    handleClick?: () => void;
}

const LinkIcon = ({ icon, text, handleClick, disabled }: LinkIconProps) => {
    return (
        <StyledLinkIcon
            className="flex items-center"
            onClick={handleClick}
            disabled={disabled}
        >
            <Image
                src={`/icons/${icon}.svg`}
                width="16px"
                height="16px"
                layout="fixed"
                alt={`icone ${text}`}
            />
            <StyledSpan className="text-sm ml-2">{text}</StyledSpan>
        </StyledLinkIcon>
    );
};

export default LinkIcon;
