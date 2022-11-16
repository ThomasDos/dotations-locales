import Image from "next/image";

interface ImageFixedProps {
    alt: string;
    src: string;
    width: number;
    height: number;
    className?: string;
    onClick?(): void;
    dataTip?: boolean;
    dataFor?: string;
    priority?: boolean;
    quality?: number;
}

export default function ImageFixed({
    alt,
    src,
    width,
    height,
    className,
    onClick,
    dataTip,
    dataFor,
    priority,
    quality,
}: ImageFixedProps) {
    return (
        <div>
            <div
                className={`relative flex min-w-[${width}px] min-h-[${height}px] ${
                    className ? className : ""
                }`}
                onClick={onClick}
            >
                <Image
                    width={width}
                    height={height}
                    alt={alt}
                    src={src}
                    data-tip={dataTip}
                    data-for={dataFor}
                    priority={priority}
                    quality={quality}
                />
            </div>
        </div>
    );
}
