import { Modal } from "@mui/material";
import {
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
} from "components/ui";
import type { Commune } from "models/commune/commune.interface";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
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
        valeur: string;
    };
    isSimulation: boolean;
    setTempCommuneData: Dispatch<SetStateAction<Commune | undefined>>;
}

const Value = ({
    currentYear,
    isSimulation,
    setTempCommuneData,
}: ValueProps) => {
    const [showModal, setShowModal] = useState(false);
    const { valeur } = currentYear;
    const valeurToNumber = Number(currentYear.valeur);
    const valeurIsLabel = valeur === "Non" || valeur === "Oui";
    return valeurIsLabel ? (
        valeur === "Oui" ? (
            <LabelGreenCustomCrossIcon text="Oui" />
        ) : (
            <LabelGreyCustomCrossIcon text="Non" />
        )
    ) : (
        <div className="flex items-center">
            <span className="font-bold text-end">
                {isNaN(valeurToNumber)
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
                        src="/icons/arrow-up.svg"
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
                onClose={() => {
                    setShowModal(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex items-center justify-center"
            >
                {/* TODO: gestion edit */}
                <div
                    className="bg-white"
                    onClick={() => {
                        setTempCommuneData(prev => prev);
                    }}
                >
                    <StyledModalHeader
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
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
                                <div className="flex items-center cursor-pointer">
                                    <Image
                                        src={`/icons/substract.svg`}
                                        width="56px"
                                        height="56px"
                                        layout="fixed"
                                        alt="Fermer la modal et revenir à la simulation"
                                    />
                                </div>
                                <StyledInput>3792</StyledInput>
                                <div className="flex items-center cursor-pointer ">
                                    <Image
                                        src={`/icons/add.svg`}
                                        width="56px"
                                        height="56px"
                                        layout="fixed"
                                        alt="Fermer la modal et revenir à la simulation"
                                    />
                                </div>
                            </div>
                            <div className="cursor-pointer text-sm">
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
