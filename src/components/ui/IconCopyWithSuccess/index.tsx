import Image from "next/image";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

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
                data-tip
                data-for="tooltip-copy"
                src={`/icons/${copied ? "checked.png" : "copy.svg"}`}
                height="16px"
                width="13.87px"
                alt="vecteur sous forme de flèche vers le haut"
                layout="fixed"
            />

            <ReactTooltip
                eventOff="click"
                id="tooltip-copy"
                textColor="#000091"
                backgroundColor="#f5f5fe"
                effect="solid"
                getContent={() => "Copier le montant"}
            />
        </div>
    );
};

export default IconCopy;
