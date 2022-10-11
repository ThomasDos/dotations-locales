import { Box, Modal } from "@mui/material";
import { Button } from "components/ui";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsSimulationFalse } from "store/appSettings.slice";
import { selectInitialCommune } from "store/initialCommune.slice";
import {
    hydrateSimulationCommune,
    selectSimulationIsDifferentThanInitial,
} from "store/simulationCommune.slice";
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
};

const StyledSimulationBanner = styled.div`
    background: rgb(0, 0, 145);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 145, 1) 0%,
        rgba(252, 93, 0, 1) 100%
    );
    padding: 32px 40px 32px 120px;
    color: var(--grey-1000);
    display: flex;
    justify-content: space-between;
`;

const StyledBannerTitle = styled.span`
    font-size: 28px;
    line-height: 36px;
`;

const StyledBannerButton = styled.div`
    padding: 8px 24px;
    border: 1px #fff solid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
    const { codeInsee, commune } = useRouter().query;

    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const initialCommune = useSelector(selectInitialCommune);
    const [resetModal, setResetModal] = useState(false);

    return (
        <>
            <StyledSimulationBanner>
                <div className="flex">
                    <div>
                        <Image
                            src={`/icons/calculator-banner.svg`}
                            width="48px"
                            height="48px"
                            layout="fixed"
                            alt="image de la simulation"
                        />
                    </div>
                    <div className="flex flex-col ml-3">
                        <StyledBannerTitle>
                            {commune} ({codeInsee})
                        </StyledBannerTitle>
                        <span className="text-sm">Simulation de dotations</span>
                    </div>
                </div>
                <div className="flex">
                    <StyledBannerButton
                        onClick={() => {
                            matomoTrackEvent([
                                "simulation",
                                "clique",
                                "Abandonner",
                            ]);
                            dispatch(updateIsSimulationFalse());
                            setIsCriteresGenerauxSimulation(false);
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
                                Réinitialiser ma simulation
                            </StyledBannerButton>
                            <StyledBannerButton
                                className="ml-4"
                                onClick={() => {
                                    matomoTrackEvent([
                                        "simulation",
                                        "clique",
                                        "Exporter",
                                    ]);
                                }}
                            >
                                Exporter
                            </StyledBannerButton>
                            <StyledBannerButton
                                className="ml-4"
                                onClick={() => {
                                    matomoTrackEvent([
                                        "simulation",
                                        "clique",
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
                        <div className="mr-6 flex-1">
                            <Button
                                text="Oui"
                                onClick={() => {
                                    dispatch(
                                        hydrateSimulationCommune(initialCommune)
                                    );
                                    setIsCriteresGenerauxSimulation(true);
                                    setResetModal(false);
                                }}
                            />
                        </div>
                        <div className="flex-1">
                            <Button
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
