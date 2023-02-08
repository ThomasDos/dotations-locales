import Link from "next/link";
import { useDispatch } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsEPCITrue } from "store/appSettings.slice";
import { DropdownEPCIRowProps } from "./DropdownEPCISearch";
import StyledDropdownRow from "./StyledDropdownRow";

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
                <StyledDropdownRow className="flex justify-between px-6 py-4">
                    <span>
                        {libelle} ({code})
                    </span>
                </StyledDropdownRow>
            </div>
        </Link>
    );
};

export default DropdownEPCIRowLink;
