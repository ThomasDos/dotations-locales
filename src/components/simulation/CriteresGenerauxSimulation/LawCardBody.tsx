import BadgeEnBeta from "components/ui/Badge/BadgeEnBeta";
import LabelProchainement from "components/ui/LabelText/LabelProchainement";
import { useSelector } from "react-redux";
import { selectCurrentYear } from "store/simulationEntity.slice";
import styled from "styled-components";

const StyledLoiSpan = styled.span`
    flex: 2;
`;

interface LawCardBodyProps {
    value: string;
    disabled: boolean;
}

function LawCardBody({ disabled, value }: LawCardBodyProps) {
    const currentYear = useSelector(selectCurrentYear);
    const deltaYearLawAndActual = Number(value) - Number(currentYear);

    const textYearFormatted =
        deltaYearLawAndActual === 0
            ? "(en vigueur)"
            : `(N${deltaYearLawAndActual})`;

    return (
        <div className="flex flex-1 items-center justify-between">
            <StyledLoiSpan>
                {disabled ? "Projet de loi" : "Loi en vigueur"} {value}{" "}
                {textYearFormatted}
            </StyledLoiSpan>
            {disabled ? <LabelProchainement /> : <BadgeEnBeta />}
        </div>
    );
}

export default LawCardBody;
