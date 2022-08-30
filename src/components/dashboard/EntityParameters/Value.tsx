import { Modal } from "@mui/material";
import {
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
} from "components/ui";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSimulationCritereValeur } from "store/simulationCommune.slice";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

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

interface ValueProps {
    currentYear: {
        unite: string | null;
        valeur: number | string;
    };
    initialCurrentYear: {
        unite: string | null;
        valeur: number | string;
    };
    isSimulation: boolean;
    critereGeneralKey: string;
    valueIsModified: boolean;
}

const Value = ({
    currentYear,
    isSimulation,
    critereGeneralKey,
    initialCurrentYear,
    valueIsModified,
}: ValueProps) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { valeur } = currentYear;
    const valeurToNumber = Number(currentYear.valeur);
    const valeurIsNotNumber = isNaN(valeurToNumber);
    const [entityInput, setEntityInput] = useState<number | string>(
        valeurIsNotNumber ? valeur : valeurToNumber
    );
    const valeurIsLabel = valeur === "Non" || valeur === "Oui";

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
        setEntityInput(initialCurrentYear.valeur);
        dispatch(
            updateSimulationCritereValeur({
                critereGeneralKey,
                valeur: Number(initialCurrentYear.valeur),
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

    return valeurIsLabel ? (
        valeur === "Oui" ? (
            <LabelGreenCustomCrossIcon text="Oui" />
        ) : (
            <LabelGreyCustomCrossIcon text="Non" />
        )
    ) : (
        <div className="flex items-center">
            <span className="font-bold text-end">
                {valeurIsNotNumber
                    ? currentYear.valeur
                    : formatNumberWithSpace(
                          Math.round(Number(currentYear.valeur))
                      )}
                {currentYear.unite && " " + currentYear.unite}
            </span>
            {isSimulation && (
                <div
                    className="flex items-center ml-1 cursor-pointer"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <Image
                        src={`/icons/${
                            valueIsModified ? "edit-pencil" : "arrow-up"
                        }.svg`}
                        height="16px"
                        width="16px"
                        layout="fixed"
                        alt="Fleche pour éditeur la valeur du paramètre"
                        className={"rotate-90"}
                    />
                </div>
            )}

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
                                            value={Math.round(
                                                Number(entityInput)
                                            )}
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
        </div>
    );
};

export default Value;
