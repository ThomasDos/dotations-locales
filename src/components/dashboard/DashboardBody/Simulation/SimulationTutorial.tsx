import Image from "next/image";
import { useDispatch } from "react-redux";
import { updateIsSimulationFalse } from "store/appSettings.slice";
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

function SimulationTutorial() {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-center flex-col">
            <div>
                <Image
                    src="/images/simulation-tutorial.svg"
                    height={240}
                    width={240}
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
                    dispatch(updateIsSimulationFalse());
                }}
            >
                <div className="flex items-center rotate-180">
                    <Image
                        src="/icons/arrow-right.svg"
                        height={16}
                        width={16}
                        alt="icone fleche gauche"
                    />
                </div>
                <StyledCancelSimulation>Abandonner</StyledCancelSimulation>
            </div>
        </div>
    );
}

export default SimulationTutorial;
