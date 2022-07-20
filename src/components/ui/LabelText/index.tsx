import Image from "next/image";
import styled from "styled-components";

interface LabelTextProps {
    text: string;
    backgroundColor?: string;
    icon?: string;
}

interface LabelTextContainerProps {
    backgroundColor: string;
}

const LabelTextContainer = styled.div<LabelTextContainerProps>`
    border-radius: 40px;
    background: ${props => props.backgroundColor};
`;

const LabelText = ({
    text,
    icon,
    backgroundColor = "#eeeeee",
}: LabelTextProps) => {
    return (
        <LabelTextContainer
            className="py-1 px-4 flex justify-center items-center text-sm"
            backgroundColor={backgroundColor}
        >
            {icon && (
                <div>
                    <Image
                        src={`/icons/${icon}`}
                        height="8.5px"
                        width="8.5px"
                        alt="icone croix"
                    />
                </div>
            )}
            <span className={`${icon ? "ml-2" : ""}`}>{text}</span>
        </LabelTextContainer>
    );
};

export default LabelText;
