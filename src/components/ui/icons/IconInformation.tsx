import Image from "next/image";

const IconInformation = () => {
    return (
        <div>
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
