import { Box, Modal } from "@mui/material";
import { Button } from "components/ui";
import ImageFixed from "components/ui/ImageFixed";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsSimulationFalse } from "store/appSettings.slice";
import { selectInitialEntity } from "store/initialEntity.slice";
import {
    hydrateSimulationEntity,
    selectSimulationIsDifferentThanInitial,
} from "store/simulationEntity.slice";
import styled from "styled-components";

const style = {
    bgcolor: "background.paper",
    boxShadow: 24,
    left: "50%",
    p: 4,
    position: "absolute",
    textAlign: "center",
    top: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
};

const StyledSimulationBanner = styled.div`
    background: rgb(0, 0, 145);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 145, 1) 0%,
        rgba(252, 93, 0, 1) 100%
    );
    color: var(--grey-1000);
    display: flex;
    justify-content: space-between;
    padding: 16px;
    @media (min-width: 640px) {
        padding: 32px;
    }
    @media (min-width: 1024px) {
        padding: 32px 40px 32px 120px;
    }
`;

const StyledBannerTitle = styled.span`
    font-size: 20px;
    line-height: 24px;

    @media (min-width: 768px) {
        font-size: 28px;
        line-height: 36px;
    }
`;

const StyledBannerButton = styled.div<{ hideSmall?: boolean }>`
    border: 1px #fff solid;
    display: ${({ hideSmall }) => (hideSmall ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    text-align: center;

    @media (min-width: 640px) {
        //TODO: réactiver les deux buttons quand feature exporter / enregistrer seront dispos
        /* display: flex; */
    }

    @media (min-width: 1024px) {
        padding: 8px 24px;
    }
`;

interface SimulationBannerProps {
    setIsCriteresGenerauxSimulation: (
        isCriteresGenerauxSimulation: boolean
    ) => void;
}

const SimulationBanner = ({
    setIsCriteresGenerauxSimulation,
}: SimulationBannerProps) => {
    const dispatch = useDispatch();
    const { code, libelle } = useRouter().query;

    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const initialEntity = useSelector(selectInitialEntity);
    const [resetModal, setResetModal] = useState(false);

    return (
        <>
            <StyledSimulationBanner>
                <div className="flex">
                    <ImageFixed
                        className="hidden md:block"
                        src={`/icons/calculator-banner.svg`}
                        width={48}
                        height={48}
                        alt="image de la simulation"
                    />
                    <div className="flex flex-col justify-center sm:ml-3">
                        <StyledBannerTitle>
                            {libelle} ({code})
                        </StyledBannerTitle>
                        <span className="text-sm">Simulation de dotations</span>
                    </div>
                </div>
                <div className="flex">
                    <StyledBannerButton
                        onClick={() => {
                            matomoTrackEvent(["Simulation", "Abandonner"]);
                            dispatch(updateIsSimulationFalse());
                        }}
                    >
                        Abandonner
                    </StyledBannerButton>
                    {simulationIsDifferentThanInitial && (
                        <>
                            <StyledBannerButton
                                className="ml-4"
                                onClick={() => {
                                    setResetModal(true);
                                }}
                            >
                                Tout réinitialiser
                            </StyledBannerButton>

                            <StyledBannerButton
                                className="ml-4"
                                hideSmall
                                onClick={() => {
                                    matomoTrackEvent([
                                        "Simulation",
                                        "Exporter",
                                    ]);
                                }}
                            >
                                Exporter
                            </StyledBannerButton>
                            <StyledBannerButton
                                className="ml-4"
                                hideSmall
                                onClick={() => {
                                    matomoTrackEvent([
                                        "Simulation",
                                        "Enregistrer",
                                    ]);
                                }}
                            >
                                Enregistrer
                            </StyledBannerButton>
                        </>
                    )}
                </div>
            </StyledSimulationBanner>
            <Modal
                open={resetModal}
                onClose={() => {
                    setResetModal(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <span className="font-semibold text-lg">
                        Êtes-vous sûr de vouloir réinitialiser votre simulation
                        ?
                    </span>
                    <div className="flex mt-4 justify-center">
                        <div className="mr-3 sm:mr-6 flex-1">
                            <Button
                                text="Oui"
                                onClick={() => {
                                    matomoTrackEvent([
                                        "Simulation",
                                        "Tout réinitialiser",
                                    ]);
                                    dispatch(
                                        hydrateSimulationEntity(initialEntity)
                                    );
                                    setIsCriteresGenerauxSimulation(true);
                                    setResetModal(false);
                                }}
                            />
                        </div>
                        <div className="flex-1">
                            <Button
                                backgroundColor="var(--red-marianne-main-472)"
                                backgroundColorHover="var(--red-marianne-425)"
                                text="Non"
                                onClick={() => {
                                    setResetModal(false);
                                }}
                            />
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default SimulationBanner;
