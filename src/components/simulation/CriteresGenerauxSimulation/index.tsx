import { Tooltip } from "@mui/material";
import { Button } from "components/ui";
import usePostSimulation from "hooks/usePostSimulation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSimulationCommune,
    selectSimulationCriteresGeneraux,
    selectSimulationIsDifferentThanInitial,
    updateSimulationCriteresGeneraux,
} from "store/simulationCommune.slice";
import styled from "styled-components";
import { toastError, toastSuccess } from "utils/customToasts";

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
}

export interface LawAvailable {
    disabled: boolean;
    value: string;
}

const initialLoiSimulationValue = (
    lawAvailable: LawAvailable[]
): LawAvailable => {
    if (lawAvailable.length === 1) {
        return lawAvailable[0];
    }

    const hasLawAvailable = lawAvailable.filter(law => !law.disabled);
    const hasOnlyOneLawAvailable = hasLawAvailable.length === 1;

    if (hasOnlyOneLawAvailable) {
        return hasLawAvailable[0];
    }

    return { disabled: false, value: "" };
};

//TODO: remplacer en valeur dynamique back
const radioButtonLawAvailable: LawAvailable[] = [
    { disabled: false, value: "2022" },
    { disabled: true, value: "2023" },
];

export default function CriteresGenerauxSimulation({
    setIsCriteresGenerauxSimulation,
    setDisplayMobileCriteresGeneraux,
}: CriteresGenerauxSimulationProps) {
    const dispatch = useDispatch();
    const { codeInsee } = useRouter().query;
    const { mutate } = usePostSimulation(`${codeInsee}`);
    const simulationCommune = useSelector(selectSimulationCommune);
    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const criteresGenerauxSimulation = useSelector(
        selectSimulationCriteresGeneraux
    );

    const [fetchSimulation, setFetchsimulation] = useState(false);
    const [criteres, setCriteres] = useState(criteresGenerauxSimulation);
    const [selectLoiSimulation, setSelectLoiSimulation] = useState(
        initialLoiSimulationValue(radioButtonLawAvailable)
    );

    useEffect(() => {
        if (fetchSimulation && simulationIsDifferentThanInitial) {
            setDisplayMobileCriteresGeneraux(false);
            mutate({
                ...simulationCommune,
                criteresGeneraux: {
                    ...criteresGenerauxSimulation,
                    ...criteres,
                },
            });
            setIsCriteresGenerauxSimulation(false);
            toastSuccess("Votre simulation est prête !");
            window.scrollTo(0, 0);
        }

        if (fetchSimulation && !simulationIsDifferentThanInitial) {
            toastError(
                "Merci de modifier les données pour créer une simulation."
            );
            setFetchsimulation(false);
        }
    }, [fetchSimulation, simulationIsDifferentThanInitial]);

    const handleReset = () => {
        setCriteres(criteresGenerauxSimulation);
    };

    return (
        <div className="flex flex-col w-full sm:w-10/12 md:w-9/12 lg:w-8/12 py-4 sm:py-14 px-5 sm:px-2 md:px-0 m-auto">
            <div className="flex flex-col mb-12 sm:mb-20">
                <SpanTitleStyled>1. Simuler avec :</SpanTitleStyled>
                <RadioGroupContainer
                    radioButtonLawAvailable={radioButtonLawAvailable}
                    selectLoiSimulation={selectLoiSimulation.value}
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
                        setFetchsimulation(true);
                    }}
                />
            </div>
        </div>
    );
}
