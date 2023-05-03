import { Tooltip } from "@mui/material";
import { Button } from "components/ui";
import usePostSimulation from "hooks/usePostSimulation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSimulationCriteresGeneraux,
    selectSimulationEntity,
    selectSimulationIsDifferentThanInitial,
    updateSimulationCriteresGeneraux,
} from "store/simulationEntity.slice";
import styled from "styled-components";
import { toastError, toastPromise } from "utils/customToasts";

import { InitSimulationPeriode } from "models/init/init.interface";
import { selectSimulationPeriodes } from "store/appSettings.slice";
import WarningDefaultMessage from "../WarningDefaultMessage";
import CriteresGenerauxCard from "./CriteresGenerauxCard";
import RadioGroupContainer from "./RadioGroupContainer";

const SpanTitleStyled = styled.h3`
    all: unset;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 16px;
`;

const SpanTextLinkTitleStyled = styled.span`
    font-size: 14px;
    color: var(--blue-france-113);
    text-decoration: underline;
    user-select: none;
    &:active {
        color: var(--blue-france-main-525);
    }
`;

interface CriteresGenerauxSimulationProps {
    setIsCriteresGenerauxSimulation: (
        isCriteresGenerauxSimulation: boolean
    ) => void;
    setDisplayMobileCriteresGeneraux: (display: boolean) => void;
    setShowAlertModal(show: boolean): void;
}

export default function CriteresGenerauxSimulation({
    setIsCriteresGenerauxSimulation,
    setDisplayMobileCriteresGeneraux,
    setShowAlertModal,
}: CriteresGenerauxSimulationProps) {
    const dispatch = useDispatch();
    const { code } = useRouter().query;
    const { mutateAsync, isSuccess, isLoading } = usePostSimulation(`${code}`);
    const simulationEntity = useSelector(selectSimulationEntity);
    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const criteresGenerauxSimulation = useSelector(
        selectSimulationCriteresGeneraux
    );
    const simulationPeriodes = useSelector(selectSimulationPeriodes);

    const [fetchSimulation, setFetchSimulation] = useState(false);
    const [criteres, setCriteres] = useState(criteresGenerauxSimulation);
    const [selectLoiSimulation, setSelectLoiSimulation] = useState<
        InitSimulationPeriode | undefined
    >(simulationPeriodes?.[0]);

    useEffect(() => {
        if (fetchSimulation && simulationIsDifferentThanInitial) {
            setDisplayMobileCriteresGeneraux(false);

            toastPromise(
                mutateAsync({
                    simulationEntity: {
                        ...simulationEntity,
                        criteresGeneraux: {
                            ...criteresGenerauxSimulation,
                            ...criteres,
                        },
                    },
                    selectLoiSimulation: selectLoiSimulation?.annee as string,
                }),
                {
                    success: "Votre simulation est prête !",
                    loading: "Votre simulation est en préparation...",
                    error: "Votre simulation a rencontré une erreur...",
                }
            );
        }

        if (fetchSimulation && !simulationIsDifferentThanInitial) {
            toastError(
                "Merci de modifier les données pour créer une simulation."
            );
            setFetchSimulation(false);
        }
    }, [fetchSimulation, simulationIsDifferentThanInitial]);

    useEffect(() => {
        if (isSuccess) {
            setIsCriteresGenerauxSimulation(false);
            window.scrollTo(0, 0);
            setShowAlertModal(true);
        }
    }, [isSuccess]);

    const handleReset = () => {
        setCriteres(criteresGenerauxSimulation);
    };

    return (
        <div className="flex flex-col w-full sm:w-10/12 md:w-9/12 lg:w-8/12 py-4 sm:py-14 px-5 sm:px-2 md:px-0 m-auto">
            <div className="flex flex-col mb-12 sm:mb-20">
                <SpanTitleStyled>1. Simuler avec :</SpanTitleStyled>
                <RadioGroupContainer
                    radioButtonLawAvailable={simulationPeriodes}
                    selectLoiSimulation={selectLoiSimulation}
                    setSelectLoiSimulation={setSelectLoiSimulation}
                />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <SpanTitleStyled className="mb-4">
                        2. Modifier les données
                    </SpanTitleStyled>
                    <div>
                        <SpanTextLinkTitleStyled
                            className="mr-2 cursor-pointer"
                            onClick={handleReset}
                        >
                            Réinitialiser
                        </SpanTextLinkTitleStyled>
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
                            <SpanTextLinkTitleStyled className="cursor-not-allowed">
                                Mode avancée
                            </SpanTextLinkTitleStyled>
                        </Tooltip>
                    </div>
                </div>
                <CriteresGenerauxCard
                    criteres={criteres}
                    setCriteres={setCriteres}
                />
            </div>

            <div className="w-full sm:max-w-xs self-center mb-14">
                <Button
                    text="Estimer mes dotations"
                    onClick={() => {
                        dispatch(
                            updateSimulationCriteresGeneraux({
                                criteresGeneraux: criteres,
                            })
                        );
                        setFetchSimulation(true);
                    }}
                    isLoading={isLoading}
                />
            </div>

            <WarningDefaultMessage
                backgroundColor="#FFE8E5"
                containerClassName="p-5 text-center"
            />
        </div>
    );
}
