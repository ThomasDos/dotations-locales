import Link from "next/link";
import { useDispatch } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsEPCITrue } from "store/appSettings.slice";
import StyledDropdownRow from "../StyledDropdownRow";
import { DropdownEPCIRowProps } from "./DropdownEPCISearch";

const DropdownEPCIRowLink = ({ code, libelle }: DropdownEPCIRowProps) => {
    const dispatch = useDispatch();
    return (
        <Link href={{ pathname: `/${code}`, query: { libelle } }}>
            <div
                onClick={() => {
                    matomoTrackEvent(["Recherche EPCI", libelle]);
                    dispatch(updateIsEPCITrue());
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

export default DropdownEPCIRowLink;
