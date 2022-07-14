import { Title } from "@dataesr/react-dsfr";
import Image from "next/image";

interface HomeRowImageTextProps {
    reverse?: boolean;
    imageHeight: string;
    imageWidth: string;
    imageAlt: string;
    titleContent: string;
    bodyContent: string;
}

const HomeRowImageText = ({
    reverse = false,
    imageHeight,
    imageWidth,
    imageAlt,
    titleContent,
    bodyContent,
}: HomeRowImageTextProps) => {
    return (
        <div
            className={`my-20 max-w-5xl flex items-center ${
                reverse ? "flex-row-reverse" : ""
            }`}
        >
            <div className={`flex flex-col ${reverse ? "ml-14" : "mr-14"}`}>
                <Title as="h1">{titleContent}</Title>
                <span>{bodyContent}</span>
            </div>
            <div>
                <Image
                    src="/icons/temporary-image-placeholder.svg"
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
