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
}
export default function HistoriqueCardHeader({
    title,
    subtitle,
}: HistoriqueCardHeaderProps) {
    return (
        <div className="flex flex-col mb-10">
            <div className="flex items-center justify-between">
                <StyledCardTitle>{title}</StyledCardTitle>
                <DropdownMenuDownload />
            </div>
            <span>{subtitle}</span>
        </div>
    );
}
