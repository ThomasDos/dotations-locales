import { FormControl, MenuItem, Select } from "@mui/material";
import { BreadCrumbsTwoLinks, LinkIcon } from "components/ui";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsCommune,
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
    libelle: string;
    code: string;
}

const SubHeader = ({ libelle, code }: SubHeaderProps) => {
    const entityWithCode = `${libelle} (${code})`;
    const dispatch = useDispatch();
    const router = useRouter();
    const isCommune = useSelector(selectIsCommune);

    const pathnameFiltered = useMemo(() => {
        if (router.pathname.includes("historique")) {
            return "Historique";
        }
        if (router.pathname.includes("alerter")) {
            return "M'alerter";
        }
        if (router.pathname.includes("comparer")) {
            return "Comparer";
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
                        secondLink={entityWithCode}
                    />

                    <span className="font-bold lg:text-2xl text-xl">
                        {entityWithCode}
                    </span>
                </div>
                <div className="hidden md:flex mt-8">
                    <LinkIcon
                        icon="euro"
                        text="Dotations"
                        handleClick={() => {
                            dispatch(updateIsSimulationFalse());
                            return router.push(`/${code}?libelle=${libelle}`);
                        }}
                    />
                    {isCommune && (
                        <LinkIcon
                            icon="simulation"
                            text="Simulation"
                            handleClick={() => {
                                dispatch(updateIsSimulationTrue());
                                return router.push(
                                    `/${code}?libelle=${libelle}`
                                );
                            }}
                        />
                    )}
                    <LinkIcon
                        icon="historique"
                        text="Historique"
                        handleClick={() =>
                            router.push(
                                `/${code}/historique?libelle=${libelle}`
                            )
                        }
                    />

                    {isCommune && (
                        <LinkIcon
                            icon="comparer"
                            text="Comparer"
                            handleClick={() =>
                                router.push(
                                    `/${code}/comparer?libelle=${libelle}`
                                )
                            }
                        />
                    )}

                    <LinkIcon
                        icon="alerter"
                        text="M'alerter"
                        handleClick={() =>
                            router.push(`/${code}/alerter?libelle=${libelle}`)
                        }
                    />
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
                                        `/${code}?libelle=${libelle}`
                                    );
                                }}
                            >
                                <LinkIcon icon="euro" text="Dotations" />
                            </MenuItem>
                            {isCommune && (
                                <MenuItem
                                    value="Simulation"
                                    onClick={() => {
                                        dispatch(updateIsSimulationTrue());
                                        return router.push(
                                            `/${code}?libelle=${libelle}`
                                        );
                                    }}
                                >
                                    <LinkIcon
                                        icon="simulation"
                                        text="Simulation"
                                    />
                                </MenuItem>
                            )}
                            <MenuItem
                                value="Historique"
                                onClick={() =>
                                    router.push(
                                        `/${code}/historique?libelle=${libelle}`
                                    )
                                }
                            >
                                <LinkIcon icon="historique" text="Historique" />
                            </MenuItem>

                            {isCommune && (
                                <MenuItem
                                    value="Comparer"
                                    onClick={() =>
                                        router.push(
                                            `/${code}/comparer?libelle=${libelle}`
                                        )
                                    }
                                >
                                    <LinkIcon icon="comparer" text="Comparer" />
                                </MenuItem>
                            )}

                            <MenuItem
                                value="M'alerter"
                                onClick={() =>
                                    router.push(
                                        `/${code}/alerter?libelle=${libelle}`
                                    )
                                }
                            >
                                <LinkIcon icon="alerter" text="M'alerter" />
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
