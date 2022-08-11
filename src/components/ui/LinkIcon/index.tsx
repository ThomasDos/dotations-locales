// import Link from "next/link";

import Image from "next/image";
import styled from "styled-components";

const SpanContainer = styled.span`
    color: var(--blue-france-sun-113-625);
`;

const LinkIconContainer = styled.div`
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
        <LinkIconContainer className="flex items-center">
            <div>
                <Image
                    src={`/icons/${icon}.svg`}
                    width="14.43px"
                    height="12px"
                    layout="fixed"
                    alt={`icone ${text}`}
                />
                <SpanContainer className="text-sm ml-2">{text}</SpanContainer>
            </div>
        </LinkIconContainer>
        // </Link>
    );
};

export default LinkIcon;
