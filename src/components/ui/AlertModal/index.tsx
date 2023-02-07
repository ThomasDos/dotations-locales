import { Fade, Modal } from "@mui/material";
import { Button, LabelText } from "components/ui";
import { useSelector } from "react-redux";
import { selectSimulationAvertissementPrecisionSimulation } from "store/simulationEntity.slice";
import DefaultAlert from "./DefaultAlert";
import PrecisionAlert from "./PrecisionAlert";

interface AlertDefaultModalProps {
    showAlertModal: boolean;
    setShowAlertModal(show: boolean): void;
    setHasConfirmedAlert(hasSeen: boolean): void;
}

export default function AlertDefaultModal({
    showAlertModal,
    setShowAlertModal,
    setHasConfirmedAlert,
}: AlertDefaultModalProps) {
    const avertissementPrecisionSimulation = useSelector(
        selectSimulationAvertissementPrecisionSimulation
    );

    const handleClose = () => {
        setShowAlertModal(false);
        setHasConfirmedAlert(true);
    };

    return (
        <Modal
            aria-labelledby="Information sur la dotation"
            aria-describedby="Les informations plus détaillées relatives à une dotation"
            open={showAlertModal}
            onClose={handleClose}
            className="flex items-center justify-center"
        >
            <Fade in={showAlertModal}>
                <div className="p-10 sm:p-16 md:p-20 bg-white w-11/12 sm:w-9/12 md:w-1/2 flex flex-col items-center text-center">
                    <div className="w-max">
                        <LabelText
                            text="IMPORTANT"
                            backgroundColor="#FFDFDF"
                            color="var(--error-425)"
                            fontWeight="700"
                        />
                    </div>
                    {avertissementPrecisionSimulation ? (
                        <PrecisionAlert />
                    ) : (
                        <DefaultAlert />
                    )}
                    <div className="w-max">
                        <Button text="J'ai compris" onClick={handleClose} />
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}
