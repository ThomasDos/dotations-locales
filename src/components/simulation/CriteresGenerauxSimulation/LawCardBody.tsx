import BadgeEnBeta from "components/ui/Badge/BadgeEnBeta";
import { useSelector } from "react-redux";
import { selectInitialCurrentYear } from "store/initialEntity.slice";
import styled from "styled-components";

const StyledLoiSpan = styled.span`
    flex: 2;
`;

interface LawCardBodyProps {
    annee: string;
    label: string;
}

function LawCardBody({ annee, label }: LawCardBodyProps) {
    const currentYear = useSelector(selectInitialCurrentYear);
    const deltaYearLawAndActual = Number(annee) - Number(currentYear);

    const textYearFormatted =
        deltaYearLawAndActual === 0
            ? " (en vigueur)"
            : ` (N${deltaYearLawAndActual})`;

    return (
        <div className="flex flex-1 items-center justify-between">
            <StyledLoiSpan>
                {label} {textYearFormatted}
            </StyledLoiSpan>
            <BadgeEnBeta />
        </div>
    );
}

export default LawCardBody;
