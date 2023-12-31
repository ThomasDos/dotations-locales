import { Badge, Title } from "@dataesr/react-dsfr";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import styled from "styled-components";

interface HomeRowImageTextProps {
    reverse?: boolean;
    src: string;
    imageHeight: number;
    imageWidth: number;
    imageAlt: string;
    titleContent: string;
    children: ReactNode;
    priority?: boolean;
    badgeText?: string;
    badgeType?: ComponentProps<typeof Badge>["type"];
    badgeHasIcon?: boolean;
}

const StyledImageContainer = styled.div<{ imageWidth: number }>`
    max-width: 80vw;
    min-width: ${({ imageWidth }) => `${imageWidth}px`};
    @media (max-width: 768px) {
        min-width: 40vw;
        margin-top: 24px;
    }
`;

const HomeRowImageText = ({
    reverse = false,
    src,
    imageHeight,
    imageWidth,
    imageAlt,
    titleContent,
    children,
    priority,
    badgeText,
    badgeType,
    badgeHasIcon = false,
}: HomeRowImageTextProps) => {
    return (
        <div
            className={`my-20 max-w-5xl flex items-center z-0 flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
            }`}
        >
            <div
                className={`flex flex-col mx-4 ${
                    reverse ? "md:ml-14" : "md:mr-14"
                }`}
            >
                {badgeText && (
                    <div className="mb-4">
                        <Badge
                            type={badgeType}
                            text={badgeText}
                            hasIcon={badgeHasIcon}
                        />
                    </div>
                )}
                <Title as={badgeText ? "h3" : "h1"}>{titleContent}</Title>
                <div>{children}</div>
            </div>
            <StyledImageContainer imageWidth={imageWidth}>
                <Image
                    src={src}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    priority={priority}
                />
            </StyledImageContainer>
        </div>
    );
};

export default HomeRowImageText;
