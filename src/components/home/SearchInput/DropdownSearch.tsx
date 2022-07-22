import Link from "next/link";
import type { IAutocompletion } from "src/models/autocompletion/autocompletion.interface";
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
    autocompletion: IAutocompletion[] | undefined;
}

const DropdownRow = ({ ...entity }: IAutocompletion) => {
    console.log("entity", entity);
    const { codeCommuneInsee: codeInsee, codePostal: codePostal } =
        entity.distributionsPostales[0];
    const { LIBELLE: nomCommune } = entity.commune;
    return (
        <Link
            href={{
                pathname: `/${codeInsee}`,
                query: { commune: nomCommune },
            }}
        >
            <DropdownRowContainer className="flex justify-between px-6 py-4">
                <span>
                    {nomCommune} ({codeInsee})
                </span>
                <span>{codePostal}</span>
            </DropdownRowContainer>
        </Link>
    );
};

const DropdownSearch = ({ autocompletion }: DropdownSearchProps) => {
    return (
        <>
            {!!autocompletion &&
                autocompletion.map((entity: IAutocompletion) => (
                    <DropdownRow {...entity} key={entity.code} />
                ))}
        </>
    );
};

export default DropdownSearch;
