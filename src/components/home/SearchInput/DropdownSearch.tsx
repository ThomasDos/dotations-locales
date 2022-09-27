import Link from "next/link";
import { matomoTrackEvent } from "services/matomo";
import type { Autocompletion } from "src/models/autocompletion/autocompletion.interface";
import styled from "styled-components";
import formatCodeInseeMetropole from "utils/formatCodeInseeMetropole";

const StyledDropdownRow = styled.div`
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
    search: string;
}

const DropdownRow = ({
    entity,
    search,
}: {
    entity: Autocompletion;
    search: string;
}) => {
    const { codeCommuneInsee: codeInsee, codePostal: codePostal } =
        entity.distributionsPostales[0];
    const { LIBELLE: commune } = entity.commune;
    const codeInseeFormatted = formatCodeInseeMetropole(codeInsee);

    return (
        <Link href={{ pathname: `/${codeInseeFormatted}`, query: { commune } }}>
            <div
                onClick={() => {
                    matomoTrackEvent([
                        "autocompletion",
                        "clique résultat",
                        commune,
                    ]);
                    matomoTrackEvent(["autocompletion", "recherche", search]);
                }}
            >
                <StyledDropdownRow className="flex justify-between px-6 py-4">
                    <span>
                        {commune} ({codeInseeFormatted})
                    </span>
                    <span>{codePostal}</span>
                </StyledDropdownRow>
            </div>
        </Link>
    );
};

const DropdownSearch = ({ autocompletion, search }: DropdownSearchProps) => {
    return (
        <>
            {!!autocompletion &&
                autocompletion.map((entity: Autocompletion) => (
                    <DropdownRow
                        entity={entity}
                        key={entity.code}
                        search={search}
                    />
                ))}
        </>
    );
};

export default DropdownSearch;
