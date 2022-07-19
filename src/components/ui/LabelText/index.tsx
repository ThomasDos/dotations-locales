import Image from "next/image";
import styled from "styled-components";

interface LabelTextProps {
    nonEligible: boolean;
}

const LabelTextContainer = styled.div`
    border-radius: 40px;
    background: #eeeeee;
`;
const NonEligible = () => (
    <div className="flex">
        <div>
            <Image
                src="/icons/cross.svg"
                height="8.5px"
                width="8.5px"
                alt="icone croix"
            />
        </div>
        <span className="ml-2">Non éligible</span>
    </div>
);

const ALetude = () => <span>A l&lsquo;étude</span>;

const LabelText = ({ nonEligible }: LabelTextProps) => {
    return (
        <LabelTextContainer className="py-1 px-4 flex justify-center items-center text-sm">
            {nonEligible ? <NonEligible /> : <ALetude />}
        </LabelTextContainer>
    );
};

export default LabelText;
