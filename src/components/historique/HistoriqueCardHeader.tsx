import DropdownMenuDownload from "components/ui/DropdownMenu/DropdownMenuDownload";
import styled from "styled-components";

const StyledCardTitle = styled.span`
    font-weight: 700;
    width: 50%;
    text-align: center;
    @media (min-width: 640px) {
        font-size: 22px;
        line-height: 28px;
        width: 100%;
        text-align: left;
    }
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
        <div className="flex flex-col mb-2 sm:mb-10">
            <div className="flex items-center justify-center sm:justify-between">
                <StyledCardTitle>{title}</StyledCardTitle>
                <div className="hidden sm:block">
                    <DropdownMenuDownload />
                </div>
            </div>
            <span className="hidden sm:block">
                {subtitle}, historique sur {anneesLength} an
                {anneesLength > 1 && "s"}
            </span>
        </div>
    );
}
