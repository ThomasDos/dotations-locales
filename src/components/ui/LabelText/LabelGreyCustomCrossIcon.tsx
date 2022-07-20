import LabelText from ".";

interface LabelGreyCustomCrossIconProps {
    text: string;
}

const LabelGreyCustomCrossIcon = ({ text }: LabelGreyCustomCrossIconProps) => {
    return <LabelText icon="cross.svg" text={text} />;
};

export default LabelGreyCustomCrossIcon;
