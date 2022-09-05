import Image from "next/image";
import styled from "styled-components";

const StyledSpanTitle = styled.span`
    font-size: 22px;
    line-height: 28px;
`;
const StyledCancelSimulation = styled.span`
    font-size: 14px;
    line-height: 24px;
    margin-left: 8px;
    color: var(--blue-france-113);
`;

interface SimulationTutorialProps {
    setIsSimulation: (isSimulation: boolean) => void;
}

function SimulationTutorial({ setIsSimulation }: SimulationTutorialProps) {
    return (
        <div className="flex items-center justify-center flex-col">
            <div>
                <Image
                    src="/images/simulation-tutorial.svg"
                    height="240px"
                    width="240px"
                    layout="fixed"
                    alt="Descriptif du mode simulation"
                />
            </div>
            <StyledSpanTitle className="mt-8 font-bold">
                Pour créer une simulation, vous devez :
            </StyledSpanTitle>
            <span className="mt-8">
                1. Sélectionnez la <strong>Loi de finances</strong> que vous
                souhaitez appliquer
            </span>

            <span className="mt-8">
                2. Modifiez les données de votre commune
            </span>

            <div
                className="mt-9 flex items-center cursor-pointer"
                onClick={() => {
                    setIsSimulation(false);
                }}
            >
                <div className="flex items-center">
                    <Image
                        src="/icons/arrow-right.svg"
                        height="16px"
                        width="16px"
                        alt="icone fleche gauche"
                        layout="fixed"
                        className={"rotate-180"}
                    />
                </div>
                <StyledCancelSimulation>Abandonner</StyledCancelSimulation>
            </div>
        </div>
    );
}

export default SimulationTutorial;
