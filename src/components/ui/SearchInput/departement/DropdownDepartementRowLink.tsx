import Link from "next/link";
import { useDispatch } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsDepartementTrue } from "store/appSettings.slice";
import StyledDropdownRow from "../StyledDropdownRow";
import { DropdownDepartementRowProps } from "./DropdownDepartementSearch";

const DropdownDepartementRowLink = ({
    code,
    libelle,
}: DropdownDepartementRowProps) => {
    const dispatch = useDispatch();
    return (
        <Link href={{ pathname: `/${code}`, query: { libelle } }}>
            <div
                onClick={() => {
                    matomoTrackEvent(["Recherche Département", libelle]);
                    dispatch(updateIsDepartementTrue());
                }}
            >
                <StyledDropdownRow>
                    <span>
                        {libelle} ({code})
                    </span>
                </StyledDropdownRow>
            </div>
        </Link>
    );
};

export default DropdownDepartementRowLink;
