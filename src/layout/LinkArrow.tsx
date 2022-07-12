import Image from "next/image";
import styled from "styled-components";

const SpanContainer = styled.span`
    margin-left: 10.67px;
`;

interface LinkArrowProps {
    textLink: string;
}

const LinkArrow = ({ textLink }: LinkArrowProps) => {
    return (
        <>
            <Image
                src="/icons/arrow-right.svg"
                height="11"
                width="11"
                alt="icone fleche droite"
                layout="fixed"
            />
            <SpanContainer>{textLink}</SpanContainer>
        </>
    );
};

export default LinkArrow;
