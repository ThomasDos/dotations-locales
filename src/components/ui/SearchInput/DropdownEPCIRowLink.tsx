import Link from "next/link";
import { useDispatch } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsEPCITrue } from "store/appSettings.slice";
import StyledDropdownRow from "./StyledDropdownRow";

interface DropdownEPCIRowLinkProps {
    codeSiren: string;
    libelle: string;
}

const DropdownEPCIRowLink = ({
    codeSiren,
    libelle,
}: DropdownEPCIRowLinkProps) => {
    const dispatch = useDispatch();
    return (
        <Link href={{ pathname: `/${codeSiren}`, query: { libelle } }}>
            <div
                onClick={() => {
                    matomoTrackEvent(["Recherche EPCI", libelle]);
                    dispatch(updateIsEPCITrue());
                }}
            >
                <StyledDropdownRow className="flex justify-between px-6 py-4">
                    <span>
                        {libelle} ({codeSiren})
                    </span>
                </StyledDropdownRow>
            </div>
        </Link>
    );
};

export default DropdownEPCIRowLink;
