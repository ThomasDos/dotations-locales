import ImageFixed from "components/ui/ImageFixed";
import { matomoTrackEvent } from "services/matomo";

interface IconInformationProps {
    setShowInfoModal(show: boolean): void;
}

const IconInformation = ({ setShowInfoModal }: IconInformationProps) => {
    return (
        <ImageFixed
            className="cursor-help"
            onClick={() => {
                matomoTrackEvent(["fonction", "info icone", "clique"]);
                setShowInfoModal(true);
            }}
            src="/icons/information.svg"
            height={16}
            width={16}
            alt="vecteur sous forme de flèche vers le bas"
        />
    );
};

export default IconInformation;
