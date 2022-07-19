import Image from "next/image";
import { useState } from "react";

interface IconCopyProps {
    toCopy: number | string;
}

const IconCopy = ({ toCopy }: IconCopyProps) => {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div
            onClick={async () => {
                onCopy();
                return navigator.clipboard.writeText(String(toCopy));
            }}
        >
            <Image
                src={`/icons/${copied ? "checked.png" : "copy.svg"}`}
                height="16px"
                width="13.87px"
                alt="vecteur sous forme de flèche vers le haut"
                layout="fixed"
            />
        </div>
    );
};

export default IconCopy;
