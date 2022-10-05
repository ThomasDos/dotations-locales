import { Tooltip } from "@mui/material";
import { Button } from "components/ui";
import usePostSimulation from "hooks/usePostSimulation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSimulationCommune,
    selectSimulationCriteresGeneraux,
    updateSimulationCriteresGeneraux,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import toastSuccess from "utils/toastSuccess";

import CriteresGenerauxCard from "./CriteresGenerauxCard";
import RadioGroupContainer from "./RadioGroupContainer";

const SpanTitleStyled = styled.h3`
    all: unset;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 16px;
`;

const SpanModeAvancéStyled = styled.span`
    font-size: 14px;
    color: var(--blue-france-113);
    text-decoration: underline;
    cursor: not-allowed;
`;

interface CriteresGenerauxSimulationProps {
    setIsCriteresGenerauxSimulation: (
        isCriteresGenerauxSimulation: boolean
    ) => void;
}

export default function CriteresGenerauxSimulation({
    setIsCriteresGenerauxSimulation,
}: CriteresGenerauxSimulationProps) {
    const { codeInsee } = useRouter().query;
    const { mutate } = usePostSimulation(`${codeInsee}`);
    const simulationCommune = useSelector(selectSimulationCommune);
    const [fetchSimulation, setFetchsimulation] = useState(false);

    useEffect(() => {
        if (fetchSimulation) {
            mutate({
                ...simulationCommune,
                criteresGeneraux: {
                    ...criteresGenerauxSimulation,
                    ...criteres,
                },
            });
            setIsCriteresGenerauxSimulation(false);
            toastSuccess("Votre simulation est prête !!");
            window.scrollTo(0, 0);
        }
    }, [fetchSimulation]);

    const criteresGenerauxSimulation = useSelector(
        selectSimulationCriteresGeneraux
    );
    const dispatch = useDispatch();

    const [criteres, setCriteres] = useState(criteresGenerauxSimulation);

    //TODO: remplacer en valeur dynamique back
    const radioButtonLawAvailable = ["2021", "2022"];

    const [selectLoiSimulation, setSelectLoiSimulation] = useState(
        radioButtonLawAvailable.length === 1 ? radioButtonLawAvailable[0] : ""
    );

    return (
        <div className="py-14 flex flex-col md:w-5/12 m-auto px-2 md:px-0">
            <div className="flex flex-col mb-20">
                <SpanTitleStyled>1. Simuler avec :</SpanTitleStyled>
                <RadioGroupContainer
                    radioButtonLawAvailable={radioButtonLawAvailable}
                    selectLoiSimulation={selectLoiSimulation}
                    setSelectLoiSimulation={setSelectLoiSimulation}
                />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <SpanTitleStyled className="mb-4">
                        2.modifier les données
                    </SpanTitleStyled>
                    <Tooltip
                        title={"En construction..."}
                        placement="top"
                        arrow
                        componentsProps={{
                            arrow: {
                                sx: {
                                    color: "#f5f5fe",
                                },
                            },
                            tooltip: {
                                sx: {
                                    bgcolor: "#f5f5fe",
                                    color: "#000091 ",
                                },
                            },
                        }}
                    >
                        <SpanModeAvancéStyled>
                            Mode avancée
                        </SpanModeAvancéStyled>
                    </Tooltip>
                </div>
                <CriteresGenerauxCard
                    criteres={criteres}
                    setCriteres={setCriteres}
                />
            </div>

            <div className="max-w-xs self-center">
                <Button
                    text="Estimer mes dotations"
                    onClick={() => {
                        dispatch(
                            updateSimulationCriteresGeneraux({
                                criteresGeneraux: criteres,
                            })
                        );
                        setFetchsimulation(true);
                    }}
                />
            </div>
        </div>
    );
}
