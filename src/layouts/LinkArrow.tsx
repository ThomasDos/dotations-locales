import Image from "next/image";
import styled from "styled-components";

const SpanContainer = styled.span`
    margin-left: 10.67px;
    font-size: 14px;
    color: var(--blue-france-sun-113-625);
`;

interface LinkArrowProps {
    textLink: string;
}

const LinkArrow = ({ textLink }: LinkArrowProps) => {
    return (
        <div className="cursor-pointer">
            <Image
                src="/icons/arrow-right.svg"
                height="11"
                width="11"
                alt="icone fleche droite"
                layout="fixed"
            />

            <SpanContainer>{textLink}</SpanContainer>
        </div>
    );
};

export default LinkArrow;
