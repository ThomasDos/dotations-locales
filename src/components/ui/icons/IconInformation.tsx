import ImageFixed from "components/ui/ImageFixed";

interface IconInformationProps {
    setShowInfoModal(show: boolean): void;
}

const IconInformation = ({ setShowInfoModal }: IconInformationProps) => {
    return (
        <ImageFixed
            className="cursor-help"
            onClick={() => {
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
