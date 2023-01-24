import ImageFixed from "components/ui/ImageFixed";

interface IconInformationProps {
    setShowDrawer(show: boolean): void;
}

const IconInformation = ({ setShowDrawer }: IconInformationProps) => {
    return (
        <ImageFixed
            className="cursor-help items-start"
            onClick={() => {
                setShowDrawer(true);
            }}
            src="/icons/information.svg"
            height={16}
            width={16}
            alt="vecteur sous forme de flèche vers le bas"
        />
    );
};

export default IconInformation;
