import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { matomoTrackEvent } from "services/matomo";
import { updateIsSimulationFalse } from "store/appSettings.slice";
import { selectSimulationIsDifferentThanInitial } from "store/simulationCommune.slice";
import styled from "styled-components";

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

    const simulationIsDifferentThanInitial = useSelector(
        selectSimulationIsDifferentThanInitial
    );
    const { codeInsee, commune } = useRouter().query;

    return (
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
    );
};

export default SimulationBanner;
