import { Title } from "@dataesr/react-dsfr";
import Image from "next/image";
import type { ReactNode } from "react";

interface HomeRowImageTextProps {
    reverse?: boolean;
    src: string;
    imageHeight: string;
    imageWidth: string;
    imageAlt: string;
    titleContent: string;
    children: ReactNode;
}

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
            className={`my-20 max-w-5xl flex items-center ${
                reverse ? "flex-row-reverse" : ""
            }`}
        >
            <div className={`flex flex-col ${reverse ? "ml-14" : "mr-14"}`}>
                <Title as="h1">{titleContent}</Title>
                <div>{children}</div>
            </div>
            <div>
                <Image
                    src={src}
                    height={imageHeight}
                    width={imageWidth}
                    alt={imageAlt}
                    layout="fixed"
                />
            </div>
        </div>
    );
};

export default HomeRowImageText;
