import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import styled from "styled-components";

const StyledCardTitle = styled.span`
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
`;

interface HistoriqueCardHeaderProps {
    title: string;
    subtitle: string;
    anneesLength: number;
}
export default function HistoriqueCardHeader({
    title,
    subtitle,
    anneesLength,
}: HistoriqueCardHeaderProps) {
    return (
        <div className="flex flex-col mb-10">
            <div className="flex items-center justify-between">
                <StyledCardTitle>{title}</StyledCardTitle>
                <DropdownMenuDownload />
            </div>
            <span>
                {subtitle}, historique sur {anneesLength} an
                {anneesLength > 1 && "s"}
            </span>
        </div>
    );
}
