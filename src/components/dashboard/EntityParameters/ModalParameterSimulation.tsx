import { Modal } from "@mui/material";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSimulationCritereValeur } from "store/simulationCommune.slice";
import styled from "styled-components";

const StyledModalHeader = styled.div`
    background: var(--grey-975);
    color: var(--blue-france-113);
    padding: 20px 24px;
    display: flex;
    cursor: pointer;
`;

const StyledModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

const StyledModalEditor = styled.div`
    color: var(--blue-france-113);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.div`
    background: var(--grey-975);
    margin: 0 5px;
    border-radius: 8px;
    width: 178px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    line-height: 36px;
`;

const StyledTitleEditor = styled.div`
    max-width: 12rem;
    text-align: center;
`;

interface ModalParameterSimulationProps {
    currentYearCritereGeneralInitial: {
        unite: string | null;
        valeur: number | string;
    };
    currentYearCritereGeneralSimulation: {
        unite: string | null;
        valeur: number | string;
    };
    critereGeneralKey: string;
    setShowModal: (showModal: boolean) => void;
    showModal: boolean;
}

function ModalParameterSimulation({
    critereGeneralKey,
    currentYearCritereGeneralInitial,
    currentYearCritereGeneralSimulation,
    setShowModal,
    showModal,
}: ModalParameterSimulationProps) {
    const dispatch = useDispatch();

    const { valeur } = currentYearCritereGeneralSimulation;
    const valeurToNumber = Number(currentYearCritereGeneralSimulation.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);

    const [entityInput, setEntityInput] = useState<number | string>(
        valeurIsNotNumber ? valeur : valeurToNumber
    );

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleInputChange = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setEntityInput(value);
        dispatch(
            updateSimulationCritereValeur({
                critereGeneralKey,
                valeur: Number(value),
            })
        );
    };

    const handleInputReset = () => {
        setEntityInput(currentYearCritereGeneralInitial.valeur);
        dispatch(
            updateSimulationCritereValeur({
                critereGeneralKey,
                valeur: Number(currentYearCritereGeneralInitial.valeur),
            })
        );
    };

    const handleInputIncrement = () => {
        if (valeurIsNotNumber) return;
        const value = Number(entityInput) + 1;
        setEntityInput(value);
        dispatch(
            updateSimulationCritereValeur({
                critereGeneralKey,
                valeur: Number(value),
            })
        );
    };

    const handleInputDecrement = () => {
        if (valeurIsNotNumber) return;
        if (Number(entityInput) <= 0) return;
        const value = Number(entityInput) - 1;
        setEntityInput(value);
        dispatch(
            updateSimulationCritereValeur({
                critereGeneralKey,
                valeur: Number(value),
            })
        );
    };

    return (
        <Modal
            open={showModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex items-center justify-center"
        >
            <div className="bg-white">
                <StyledModalHeader onClick={handleModalClose}>
                    <div className="flex items-center cursor-pointer">
                        <Image
                            src={`/icons/arrow-right.svg`}
                            width="16px"
                            height="16px"
                            layout="fixed"
                            alt="Fermer la modal et revenir à la simulation"
                            className="rotate-180"
                        />
                    </div>
                    <span className="ml-2">Données de votre commune</span>
                </StyledModalHeader>
                <StyledModalBody>
                    <StyledModalEditor>
                        <StyledTitleEditor className="mb-12 text-lg font-bold">
                            Nombre d&apos;habitants de la commune
                        </StyledTitleEditor>
                        <div className="flex items-center mb-12">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={handleInputDecrement}
                            >
                                <Image
                                    src={`/icons/substract.svg`}
                                    width="56px"
                                    height="56px"
                                    layout="fixed"
                                    alt="Fermer la modal et revenir à la simulation"
                                />
                            </div>
                            <StyledInput>
                                {!valeurIsNotNumber && (
                                    <input
                                        type="number"
                                        className="text-center"
                                        onChange={handleInputChange}
                                        value={Math.round(Number(entityInput))}
                                    />
                                )}
                            </StyledInput>
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={handleInputIncrement}
                            >
                                <Image
                                    src={`/icons/add.svg`}
                                    width="56px"
                                    height="56px"
                                    layout="fixed"
                                    alt="Fermer la modal et revenir à la simulation"
                                />
                            </div>
                        </div>
                        <div
                            className="cursor-pointer text-sm"
                            onClick={handleInputReset}
                        >
                            Réinitialiser
                        </div>
                    </StyledModalEditor>
                </StyledModalBody>
            </div>
        </Modal>
    );
}

export default ModalParameterSimulation;
