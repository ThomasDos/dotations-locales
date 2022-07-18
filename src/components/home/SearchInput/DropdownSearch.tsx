import type { IEntity, IFetchEntityResult } from "interfaces/entity.interface";
import Link from "next/link";
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
    searchResult: IFetchEntityResult | undefined;
}

const DropdownRow = ({ ...entity }: IEntity) => {
    console.log("entity", entity);
    const { code_commune_insee: codeInsee, code_postal: codePostal } =
        entity.distributions_postales[0];
    const { LIBELLE: nomCommune } = entity.commune;
    return (
        <Link
            href={{
                pathname: `/${codeInsee}`,
                query: { année: "2022", commune: nomCommune },
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

const DropdownSearch = ({ searchResult }: DropdownSearchProps) => {
    return (
        <>
            {!!searchResult &&
                searchResult.map((entity: IEntity) => (
                    <DropdownRow {...entity} key={entity.code} />
                ))}
        </>
    );
};

export default DropdownSearch;
