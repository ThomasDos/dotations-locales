import { Modal } from "@mui/material";
import {
    LabelGreenCustomCrossIcon,
    LabelGreyCustomCrossIcon,
} from "components/ui";
import type { Commune } from "models/commune/commune.interface";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

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
                    TEST MODAL
                </div>
            </Modal>
        </div>
    );
};

export default Value;
