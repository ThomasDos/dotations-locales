import { Tooltip } from "@mui/material";
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
            className=" cursor-pointer"
        >
            <Tooltip
                title={copied ? "Copié !" : "Copier le montant"}
                placement="top"
                arrow
                componentsProps={{
                    arrow: {
                        sx: {
                            color: copied ? "#27A658" : "#f5f5fe",
                        },
                    },
                    tooltip: {
                        sx: {
                            bgcolor: copied ? "#27A658" : "#f5f5fe",
                            color: copied ? "#FFFFFF" : "#000091 ",
                        },
                    },
                }}
            >
                <Image
                    data-tip
                    data-for="tooltip-copy"
                    src={`/icons/${copied ? "copy-success.svg" : "copy.svg"}`}
                    height="16px"
                    width="13.87px"
                    alt="vecteur sous forme de flèche vers le haut"
                    layout="fixed"
                />
            </Tooltip>
        </div>
    );
};

export default IconCopy;
