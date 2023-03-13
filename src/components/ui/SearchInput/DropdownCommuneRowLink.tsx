import Link from "next/link";
import { useDispatch } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsCommuneTrue } from "store/appSettings.slice";
import { DropdownCommuneRowProps } from "./DropdownCommuneSearch";
import StyledDropdownRow from "./StyledDropdownRow";

const DropdownCommuneRowLink = ({
    libelle,
    codeFormatted,
    codePostal,
}: DropdownCommuneRowProps) => {
    const dispatch = useDispatch();
    return (
        <Link href={{ pathname: `/${codeFormatted}`, query: { libelle } }}>
            <div
                onClick={() => {
                    matomoTrackEvent(["Recherche", libelle]);
                    dispatch(updateIsCommuneTrue());
                }}
            >
                <StyledDropdownRow>
                    <span>
                        {libelle} ({codeFormatted})
                    </span>
                    <span>{codePostal}</span>
                </StyledDropdownRow>
            </div>
        </Link>
    );
};

export default DropdownCommuneRowLink;
