import Image from "next/image";
import { matomoTrackEvent } from "services/matomo";

const IconInformation = () => {
    return (
        <div
            className="cursor-help"
            onClick={() => {
                matomoTrackEvent(["fonction", "info icone", "clique"]);
            }}
        >
            <Image
                src="/icons/information.svg"
                height="16px"
                width="16px"
                alt="vecteur sous forme de flèche vers le bas"
                layout="fixed"
            />
        </div>
    );
};

export default IconInformation;
