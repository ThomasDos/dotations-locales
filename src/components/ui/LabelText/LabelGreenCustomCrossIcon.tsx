import LabelText from ".";

interface LabelGreenCustomProps {
    text: string;
}

const LabelGreenCustomCrossIcon = ({ text }: LabelGreenCustomProps) => {
    return (
        <LabelText
            icon="valide-checked.svg"
            text={text}
            backgroundColor="#B8FEC9"
        />
    );
};

export default LabelGreenCustomCrossIcon;
