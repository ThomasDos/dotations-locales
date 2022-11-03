import Image from "next/image";

const IconVectorUp = () => {
    return (
        <div className="flex items-center">
            <Image
                src="/icons/vector-up.png"
                height={8}
                width={10}
                alt="vecteur sous forme de flèche vers le haut"
            />
        </div>
    );
};

export default IconVectorUp;
