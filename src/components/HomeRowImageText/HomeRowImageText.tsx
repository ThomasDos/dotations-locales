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
                <span className="text-2xl font-bold mb-4">{titleContent}</span>
                <span>{bodyContent}</span>
            </div>
            <Image
                src="/icons/temporary-image-placeholder.svg"
                height={imageHeight}
                width={imageWidth}
                alt={imageAlt}
            />
        </div>
    );
};

export default HomeRowImageText;
