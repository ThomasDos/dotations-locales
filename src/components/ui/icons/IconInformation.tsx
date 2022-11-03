import Image from "next/image";
import { matomoTrackEvent } from "services/matomo";

const IconInformation = () => {
    return (
        <div
            className="cursor-help flex items-center"
            onClick={() => {
                matomoTrackEvent(["fonction", "info icone", "clique"]);
            }}
        >
            <Image
                src="/icons/information.svg"
                height={16}
                width={16}
                alt="vecteur sous forme de flèche vers le bas"
            />
        </div>
    );
};

export default IconInformation;
