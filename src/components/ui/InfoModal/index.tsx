import { Fade, Modal } from "@mui/material";
import ImageFixed from "components/ui/ImageFixed";
import LabelText from "components/ui/LabelText";
import { Dotation } from "models/commune/commune.interface";
import styled from "styled-components";
import InfoModalDropdown from "./InfoModalDropdown";

interface InfoModalProps {
    showInfoModal: boolean;
    setShowInfoModal(show: boolean): void;
    dotation: Dotation;
}

const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0 15px 20px;
    background-color: var(--grey-975);
    cursor: pointer;
    @media (min-width: 720px) {
        padding: 30px 0 30px 40px;
    }
`;

const StyledModalBody = styled.div`
    padding: 18px 36px 36px;
    background-color: var(--grey-1000);
    @media (min-width: 720px) {
        padding: 18px 80px 36px;
    }
`;

const StyledDotationTitle = styled.div`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 8px;
`;

export default function InfoModal({
    showInfoModal,
    setShowInfoModal,
    dotation,
}: InfoModalProps) {
    const handleClose = () => {
        setShowInfoModal(false);
    };

    const { title } = dotation;

    return (
        <Modal
            aria-labelledby="Information sur la dotation"
            aria-describedby="Les informations plus détaillées relatives à une dotation"
            open={showInfoModal}
            onClose={handleClose}
            className="flex items-center justify-center"
        >
            <Fade in={showInfoModal}>
                <div className="h-11/12 w-11/12	md:w-9/12 lg:w-2/4">
                    <StyledModalHeader onClick={handleClose}>
                        <ImageFixed
                            src="/icons/cross-blue.svg"
                            width={16}
                            height={16}
                            alt="Une croix pour fermer la modal"
                        />
                        <span className="text-sm text-color-primary">
                            Fermer
                        </span>
                    </StyledModalHeader>
                    <StyledModalBody>
                        <div className="mb-10">
                            <StyledDotationTitle>{title}</StyledDotationTitle>
                            <div className="text-sm flex items-center">
                                <div className="mr-2">
                                    Dernière mise à jour : 29 juillet 2022
                                </div>
                                <LabelText
                                    text="DGCL"
                                    backgroundColor="var(--blue-france-925)"
                                    color="var(--blue-france-113)"
                                />
                            </div>
                        </div>

                        <div className="mb-10">
                            Sit sit cras duis gravida egestas sit ac, porttitor
                            enim. Est massa massa eget felis. Eu erat proin
                            risus, gravida. Orci at arcu velit justo, augue.
                            Congue netus etiam ornare leo dictumst donec augue.
                            Leo, amet fringilla ut fames.
                        </div>

                        <div className="mb-10">
                            <InfoModalDropdown title="Conditions d'attribution" />
                            <InfoModalDropdown title="Conditions d’exclusion" />
                            <InfoModalDropdown title="Critères concernés" />
                            <InfoModalDropdown
                                title="Formule de calcul"
                                lastRow
                            />
                        </div>

                        <div className="text-color-primary text-sm flex items-center cursor-pointer w-fit">
                            <ImageFixed
                                className="mr-2"
                                width={16}
                                height={16}
                                alt="icone fleche droite"
                                src="/icons/arrow-right.svg"
                            />
                            <div>Note d&apos;information DSR 2022</div>
                        </div>
                    </StyledModalBody>
                </div>
            </Fade>
        </Modal>
    );
}
