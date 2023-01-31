import styled from "styled-components";

interface DrawerLinks {
    links: { linkText: string; dotationKey: string }[];
    handleChangeInfoDotation(dotationKey: string): void;
}

const DrawerLink = styled.div`
    padding-top: 8px;
    padding-bottom: 12px;
    border-top: 1px solid #eeeeee;
`;

export default function DrawerLinks({
    links,
    handleChangeInfoDotation,
}: DrawerLinks) {
    return (
        <div className="flex flex-col mb-10 ">
            {!!links?.length &&
                links.map(({ linkText, dotationKey }) => {
                    return (
                        <DrawerLink
                            key={linkText}
                            onClick={() =>
                                handleChangeInfoDotation(dotationKey)
                            }
                        >
                            {linkText}
                        </DrawerLink>
                    );
                })}
        </div>
    );
}
