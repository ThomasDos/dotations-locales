import { Title } from "@dataesr/react-dsfr";
import Image from "next/image";
import type { ReactNode } from "react";
import styled from "styled-components";

interface HomeRowImageTextProps {
    reverse?: boolean;
    src: string;
    imageHeight: string;
    imageWidth: string;
    imageAlt: string;
    titleContent: string;
    children: ReactNode;
}

const StyledImageContainer = styled.div<{ imageWidth: string }>`
    max-width: 80vw;
    min-width: ${({ imageWidth }) => imageWidth};
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
                <Title as="h1">{titleContent}</Title>
                <div>{children}</div>
            </div>
            <StyledImageContainer imageWidth={imageWidth}>
                <Image
                    src={src}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                />
            </StyledImageContainer>
        </div>
    );
};

export default HomeRowImageText;
