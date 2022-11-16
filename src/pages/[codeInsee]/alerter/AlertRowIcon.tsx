import ImageFixed from "components/ui/ImageFixed";

interface AlertRowIconProps {
    text: string;
}

export default function AlertRowIcon({ text }: AlertRowIconProps) {
    return (
        <div className="my-6 flex">
            <ImageFixed
                className="mr-1"
                src="/icons/valid-checked-with-background.svg"
                width={32}
                height={22}
                alt="une icone de validation"
            />
            <div className="font-bold">{text}</div>
        </div>
    );
}
