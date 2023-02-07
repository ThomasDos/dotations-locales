import { Modal } from "@mui/material";
import { Button } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import usePostSimulation from "hooks/usePostSimulation";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSimulationEntity,
    updateSimulationCritereValeur,
} from "store/simulationEntity.slice";
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
    description: string;
}

function ModalParameterSimulation({
    critereGeneralKey,
    currentYearCritereGeneralInitial,
    currentYearCritereGeneralSimulation,
    setShowModal,
    showModal,
    description,
}: ModalParameterSimulationProps) {
    const dispatch = useDispatch();
    const { code } = useRouter().query;
    const { isLoading } = usePostSimulation(`${code}`);
    const simulationEntity = useSelector(selectSimulationEntity);
    const [fetchSimulation, setFetchsimulation] = useState(false);

    const { valeur } = currentYearCritereGeneralSimulation;
    const valeurToNumber = Number(currentYearCritereGeneralSimulation.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);

    const [entityInput, setEntityInput] = useState<number | string>(
        valeurIsNotNumber ? valeur : valeurToNumber
    );

    useEffect(() => {
        if (fetchSimulation) {
            //UPDATE postSimulationMutate si besoin
            setFetchsimulation(false);
        }
    }, [simulationEntity]);
    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleSubmit = () => {
        dispatch(
            updateSimulationCritereValeur({
                critereGeneralKey,
                valeur: Number(entityInput),
            })
        );
        setFetchsimulation(true);
        handleModalClose();
    };

    const handleInputChange = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setEntityInput(value);
    };

    const handleInputReset = () => {
        setEntityInput(currentYearCritereGeneralInitial.valeur);
    };

    const handleInputIncrement = () => {
        if (valeurIsNotNumber) return;
        const value = Number(entityInput) + 1;
        setEntityInput(value);
    };

    const handleInputDecrement = () => {
        if (valeurIsNotNumber) return;
        if (Number(entityInput) <= 0) return;
        const value = Number(entityInput) - 1;
        setEntityInput(value);
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
                    <ImageFixed
                        className="flex items-center cursor-pointer rotate-180"
                        src={`/icons/arrow-right.svg`}
                        width={16}
                        height={16}
                        alt="Une fleche vers la droite pour fermer la modal et revenir à la simulation"
                    />
                    <span className="ml-2">Données de votre commune</span>
                </StyledModalHeader>
                <StyledModalBody>
                    <StyledModalEditor>
                        <StyledTitleEditor className="mb-12 text-lg font-bold">
                            {description}
                        </StyledTitleEditor>
                        <div className="flex items-center mb-12">
                            <ImageFixed
                                className="flex items-center cursor-pointer"
                                onClick={handleInputDecrement}
                                src={`/icons/substract.svg`}
                                width={56}
                                height={56}
                                alt="Icone moins pour diminuer le critère"
                            />
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

                            <ImageFixed
                                className="flex items-center cursor-pointer"
                                onClick={handleInputIncrement}
                                src={`/icons/add.svg`}
                                width={56}
                                height={56}
                                alt="Icone plus pour augmenter le critère"
                            />
                        </div>
                        <div
                            className="cursor-pointer text-sm"
                            onClick={handleInputReset}
                        >
                            Réinitialiser
                        </div>
                        <div className="mt-4">
                            <Button
                                text={
                                    isLoading
                                        ? "Simulation en cours..."
                                        : "Appliquer"
                                }
                                onClick={handleSubmit}
                            />
                        </div>
                    </StyledModalEditor>
                </StyledModalBody>
            </div>
        </Modal>
    );
}

export default ModalParameterSimulation;
