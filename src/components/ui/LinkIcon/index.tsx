// import Link from "next/link";

import Image from "next/image";
import styled from "styled-components";

const StyledSpan = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const StyledLinkIcon = styled.div`
    padding: 4px 12px 4px 8px;
`;

interface LinkIconProps {
    icon: string;
    path: string;
    text: string;
}

const LinkIcon = ({ icon, text }: LinkIconProps) => {
    return (
        //TODO: update href when page is ready
        // <Link  href='/${path}'>
        <StyledLinkIcon className="flex items-center">
            <div>
                <Image
                    src={`/icons/${icon}.svg`}
                    width="14.43px"
                    height="12px"
                    layout="fixed"
                    alt={`icone ${text}`}
                />
                <StyledSpan className="text-sm ml-2">{text}</StyledSpan>
            </div>
        </StyledLinkIcon>
        // </Link>
    );
};

export default LinkIcon;
