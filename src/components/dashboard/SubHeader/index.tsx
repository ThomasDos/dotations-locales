import { FormControl, MenuItem, Select } from "@mui/material";
import { BreadCrumbsTwoLinks, LinkIcon } from "components/ui";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
    updateIsSimulationFalse,
    updateIsSimulationTrue,
} from "store/appSettings.slice";
import styled from "styled-components";

const StyledHeaderDashboard = styled.div`
    padding: 12px 20px;
    @media (min-width: 900px) {
        padding: 32px 40px 32px 120px;
    }
`;

interface SubHeaderProps {
    commune: string;
    codeInsee: string;
}

const SubHeader = ({ commune, codeInsee }: SubHeaderProps) => {
    const communeWithCodeInsee = `${commune} (${codeInsee})`;
    const dispatch = useDispatch();
    const router = useRouter();

    const pathnameFiltered = useMemo(() => {
        if (router.pathname.includes("historique")) {
            return "Historique";
        }
        if (router.pathname.includes("alerter")) {
            return "M'alerter";
        }

        return "Dotations";
    }, [router.pathname]);
    const [modeSelected, setModeSelected] = useState(pathnameFiltered);

    return (
        <>
            <StyledHeaderDashboard className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <BreadCrumbsTwoLinks
                        firstLink="Accueil"
                        secondLink={communeWithCodeInsee}
                    />

                    <span className="font-bold lg:text-2xl text-xl">
                        {communeWithCodeInsee}
                    </span>
                </div>
                <div className="hidden md:flex mt-8">
                    <LinkIcon
                        icon="euro"
                        text="Dotations"
                        handleClick={() => {
                            dispatch(updateIsSimulationFalse());
                            return router.push(
                                `/${codeInsee}?commune=${commune}`
                            );
                        }}
                    />
                    <LinkIcon
                        icon="simulation"
                        text="Simulation"
                        handleClick={() => {
                            dispatch(updateIsSimulationTrue());
                            return router.push(
                                `/${codeInsee}?commune=${commune}`
                            );
                        }}
                    />
                    <LinkIcon
                        icon="historique"
                        text="Historique"
                        handleClick={() =>
                            router.push(
                                `/${codeInsee}/historique?commune=${commune}`
                            )
                        }
                    />
                    <LinkIcon
                        icon="alerter"
                        text="M'alerter"
                        handleClick={() =>
                            router.push(
                                `/${codeInsee}/alerter?commune=${commune}`
                            )
                        }
                    />
                    <LinkIcon icon="comparer" text="Comparer" disabled />
                </div>
                <div className="w-full md:hidden">
                    <FormControl
                        variant="filled"
                        sx={{
                            m: "12px 0 24px 0",
                            width: "100%",
                        }}
                    >
                        <Select
                            id="select-mode"
                            value={modeSelected}
                            onChange={e => {
                                setModeSelected(e.target.value);
                            }}
                            sx={{
                                "& .css-d9oaum-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                                    {
                                        paddingTop: "16px",
                                    },
                                borderBottom: "solid 2px #000091",
                                color: "#000091",
                                outline: "none",
                                width: "100%",
                            }}
                        >
                            <MenuItem
                                value="Dotations"
                                onClick={() => {
                                    dispatch(updateIsSimulationFalse());
                                    return router.push(
                                        `/${codeInsee}?commune=${commune}`
                                    );
                                }}
                            >
                                <LinkIcon icon="euro" text="Dotations" />
                            </MenuItem>
                            <MenuItem
                                value="Simulation"
                                onClick={() => {
                                    dispatch(updateIsSimulationTrue());
                                    return router.push(
                                        `/${codeInsee}?commune=${commune}`
                                    );
                                }}
                            >
                                <LinkIcon icon="simulation" text="Simulation" />
                            </MenuItem>
                            <MenuItem
                                value="Historique"
                                onClick={() =>
                                    router.push(
                                        `/${codeInsee}/historique?commune=${commune}`
                                    )
                                }
                            >
                                <LinkIcon icon="historique" text="Historique" />
                            </MenuItem>

                            <MenuItem
                                value="M'alerter"
                                onClick={() =>
                                    router.push(
                                        `/${codeInsee}/alerter?commune=${commune}`
                                    )
                                }
                            >
                                <LinkIcon icon="alerter" text="M'alerter" />
                            </MenuItem>
                            <MenuItem value="Comparer" disabled>
                                <LinkIcon
                                    icon="comparer"
                                    text="Comparer"
                                    disabled
                                />
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </StyledHeaderDashboard>
            <hr className="hidden md:flex" />
        </>
    );
};

export default SubHeader;
