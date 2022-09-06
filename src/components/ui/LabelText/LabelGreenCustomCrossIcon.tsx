import LabelText from ".";

interface LabelGreenCustomProps {
    text: string;
}

const LabelGreenCustomCrossIcon = ({ text }: LabelGreenCustomProps) => {
    return (
        <LabelText
            icon="valid-checked.svg"
            text={text}
            backgroundColor="#B8FEC9"
            fontWeight="700"
        />
    );
};

export default LabelGreenCustomCrossIcon;
