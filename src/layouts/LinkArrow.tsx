import Image from "next/image";
import styled from "styled-components";

const StyledSpan = styled.span`
    margin-left: 10.67px;
    font-size: 14px;
    color: var(--blue-france-sun-113-625);
`;

interface LinkArrowProps {
    textLink: string;
}

const LinkArrow = ({ textLink }: LinkArrowProps) => {
    return (
        <div className="cursor-pointer flex items-center">
            <Image
                src="/icons/arrow-right.svg"
                height="16px"
                width="16px"
                alt="icone fleche droite"
                layout="fixed"
            />

            <StyledSpan>{textLink}</StyledSpan>
        </div>
    );
};

export default LinkArrow;
