import Image from "next/image";

const IconVectorDown = () => {
    return (
        <div className="flex items-center">
            <Image
                src="/icons/vector-down.png"
                height={8}
                width={10}
                alt="vecteur sous forme de flèche vers le bas"
            />
        </div>
    );
};

export default IconVectorDown;
