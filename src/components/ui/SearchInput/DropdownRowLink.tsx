import Link from "next/link";
import { matomoTrackEvent } from "services/matomo";
import { DropdownRowProps } from "./DropdownSearch";
import StyledDropdownRow from "./StyledDropdownRow";

const DropdownRowLink = ({
    search,
    commune,
    codeInseeFormatted,
    codePostal,
}: DropdownRowProps) => {
    return (
        <Link href={{ pathname: `/${codeInseeFormatted}`, query: { commune } }}>
            <div
                onClick={() => {
                    matomoTrackEvent(["Recherche", commune]);
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

export default DropdownRowLink;
