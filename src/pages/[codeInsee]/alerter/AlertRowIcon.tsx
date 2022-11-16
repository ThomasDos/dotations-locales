import Image from "next/image";

interface AlertRowIconProps {
    text: string;
}

export default function AlertRowIcon({ text }: AlertRowIconProps) {
    return (
        <div className="my-6 flex">
            <div className="min-w-[32px] min-h-[22px] mr-1">
                <Image
                    src="/icons/valid-checked-with-background.svg"
                    width={32}
                    height={22}
                    alt="un icon de validation"
                />
            </div>
            <div className="font-bold">{text}</div>
        </div>
    );
}
