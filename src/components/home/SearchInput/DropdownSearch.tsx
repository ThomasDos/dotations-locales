import Link from "next/link";
import type { Autocompletion } from "src/models/autocompletion/autocompletion.interface";
import styled from "styled-components";

const DropdownRowContainer = styled.div`
    cursor: pointer;
    :hover {
        background-color: var(--blue-france-975);
    }
    :active {
        background-color: var(--blue-france-sun-113-625);
        color: var(--grey-1000);
    }
`;

interface DropdownSearchProps {
    autocompletion: Autocompletion[] | undefined;
}

const DropdownRow = ({ ...entity }: Autocompletion) => {
    const { codeCommuneInsee: codeInsee, codePostal: codePostal } =
        entity.distributionsPostales[0];
    const { LIBELLE: commune } = entity.commune;

    return (
        <Link href={{ pathname: `/${codeInsee}`, query: { commune } }}>
            <a>
                <DropdownRowContainer className="flex justify-between px-6 py-4">
                    <span>
                        {commune} ({codeInsee})
                    </span>
                    <span>{codePostal}</span>
                </DropdownRowContainer>
            </a>
        </Link>
    );
};

const DropdownSearch = ({ autocompletion }: DropdownSearchProps) => {
    return (
        <>
            {!!autocompletion &&
                autocompletion.map((entity: Autocompletion) => (
                    <DropdownRow {...entity} key={entity.code} />
                ))}
        </>
    );
};

export default DropdownSearch;
