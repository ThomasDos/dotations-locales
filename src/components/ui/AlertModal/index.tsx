import { Badge } from "@dataesr/react-dsfr";
import { Fade, Modal } from "@mui/material";
import { Button } from "components/ui";
import { useSelector } from "react-redux";
import { selectIsSimulation } from "store/appSettings.slice";
import DefaultAlert from "./DefaultAlert";

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
    const handleClose = () => {
        setShowAlertModal(false);
        setHasConfirmedAlert(true);
    };

    const isSimulation = useSelector(selectIsSimulation);
    const showModal = isSimulation && showAlertModal;

    return (
        <Modal
            aria-labelledby="Information sur la dotation"
            aria-describedby="Les informations plus détaillées relatives à une dotation"
            open={showModal}
            className="flex items-center justify-center"
        >
            <Fade in={showModal}>
                <div className="p-10 sm:p-16 md:p-20 bg-white w-11/12 sm:w-9/12 md:w-1/2 flex flex-col items-center text-center">
                    <Badge text="AVERTISSEMENT" type="warning" hasIcon />

                    <DefaultAlert />
                    <div className="w-max">
                        <Button text="J'ai compris" onClick={handleClose} />
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}
