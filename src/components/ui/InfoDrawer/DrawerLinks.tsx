import styled from "styled-components";
import ImageFixed from "../ImageFixed";

interface DrawerLinks {
    links: { linkText: string; dotationKey: string }[];
    handleChangeInfoDotation(dotationKey: string): void;
}

const DrawerLink = styled.div`
    padding-top: 8px;
    padding-bottom: 12px;
    border-top: 1px solid #eeeeee;
    display: flex;
    color: var(--blue-france-sun-113-625);
    text-decoration: underline;
    cursor: pointer;
    :hover {
        background: #ececfe;
    }
`;

export default function DrawerLinks({
    links,
    handleChangeInfoDotation,
}: DrawerLinks) {
    return (
        <div className="flex flex-col mb-10">
            {!!links?.length &&
                links.map(({ linkText, dotationKey }) => {
                    return (
                        <DrawerLink
                            key={linkText}
                            onClick={() =>
                                handleChangeInfoDotation(dotationKey)
                            }
                        >
                            <span className="mr-2">{linkText}</span>
                            <ImageFixed
                                src="/icons/arrow-right.svg"
                                height={8}
                                width={10}
                                alt="vecteur sous forme de flèche vers le bas"
                            />
                        </DrawerLink>
                    );
                })}
        </div>
    );
}
